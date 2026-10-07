import { Check, HelpCircle, RotateCcw, X } from 'lucide-react'
import { useState } from 'react'
import type { QuizBlock } from '../../content/types'
import { Markdown } from '../../lib/markdown'
import { useProgress } from '../../state/ProgressProvider'
import { Button, cx } from '../ui/primitives'
import styles from './blocks.module.css'

export function Quiz({ block }: { block: QuizBlock }) {
  const { progress, actions } = useProgress()
  const chosen = progress.quiz[block.id]
  const [peeked, setPeeked] = useState(false)
  const revealed = !!chosen || peeked
  const correct = block.options.find((o) => o.correct)!

  const retry = () => {
    actions.clearQuiz(block.id)
    setPeeked(false)
  }

  return (
    <section className={styles.quiz} aria-labelledby={`${block.id}-q`}>
      <div className={styles.quizHead}>
        <HelpCircle size={20} aria-hidden />
        <span>Dừng lại một chút</span>
      </div>
      <h4 id={`${block.id}-q`}>{block.question}</h4>

      <div className={styles.options}>
        {block.options.map((o, i) => {
          const isChosen = chosen === o.id
          const state = !revealed ? undefined : o.correct ? styles.optCorrect : isChosen ? styles.optWrong : styles.optDim
          return (
            <div key={o.id} className={cx(styles.option, state)}>
              <button type="button" disabled={revealed} onClick={() => actions.answerQuiz(block.id, o.id)} aria-pressed={isChosen}>
                <span className={styles.optLetter}>
                  {revealed && o.correct ? <Check size={15} /> : revealed && isChosen ? <X size={15} /> : String.fromCharCode(65 + i)}
                </span>
                <span>{o.text}</span>
              </button>
              {revealed && (
                <div className={styles.explain}>
                  <Markdown md={o.explain} />
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className={styles.quizFoot} aria-live="polite">
        {!revealed && (
          <Button variant="ghost" size="sm" onClick={() => setPeeked(true)}>
            Xem luôn đáp án
          </Button>
        )}
        {chosen && (
          <span className={chosen === correct.id ? styles.resultGood : styles.resultBad}>
            {chosen === correct.id ? 'Chính xác!' : 'Chưa đúng — đọc giải thích của từng phương án bên trên.'}
          </span>
        )}
        {revealed && (
          <Button variant="ghost" size="sm" onClick={retry}>
            <RotateCcw size={15} /> Làm lại
          </Button>
        )}
      </div>
    </section>
  )
}

import useInView from '../hooks/useInView'
import StatCard from './StatCard'

const STATS = [
  { value: 2, suffix: '', label: 'Internships completed' },
  { value: 6, suffix: '+', label: 'Projects built' },
  { value: 10, suffix: '+', label: 'Technologies used' },
  { value: 5, suffix: 'th', label: 'Semester of BS CS' },
]

function Stats() {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  return (
    <section className="section stats-section" ref={ref}>
      <div className="section-content stats-grid">
        {STATS.map((stat) => (
          <StatCard key={stat.label} start={isInView} {...stat} />
        ))}
      </div>
    </section>
  )
}

export default Stats

import { memo } from 'react'
import useCountUp from '../hooks/useCountUp'

function StatCard({ value, suffix = '', label, start }) {
  const count = useCountUp(value, { start })

  return (
    <div className="stat-card">
      <p className="stat-number">
        {count}
        {suffix}
      </p>
      <p className="stat-label">{label}</p>
    </div>
  )
}

export default memo(StatCard)

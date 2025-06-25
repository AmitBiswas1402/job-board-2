import { JobFilters } from "@/components/general/JobFilters"
import { Card } from "@/components/ui/card"

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <JobFilters />
    </div>
  )
}
export default Home
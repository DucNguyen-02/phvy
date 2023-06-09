import MainBoard from '@/app/Components/MainBoard'
import MainLayout from '@/app/Layout/MainLayout'

const Home = () => {
  return (
    <div className="px-8">
      <MainBoard />
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export default Home

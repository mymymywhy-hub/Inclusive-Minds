import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import StoryReader from './pages/StoryReader'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story/:ageBand/:slug" element={<StoryReader />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

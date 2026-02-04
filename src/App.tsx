import { Routes, Route } from 'react-router-dom'
import EnterChat from './pages/EnterChat'
import ChatRoom from './pages/ChatRoom'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
    return (
        <AnimatePresence mode='wait'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='min-h-screen w-full'
            >
                <Routes>
                    <Route path='/' element={<EnterChat />} />
                    {/* <Route path='/chat' element={<ChatRoom />} /> */}
                </Routes>
            </motion.div>
        </AnimatePresence>
    )
}

export default App
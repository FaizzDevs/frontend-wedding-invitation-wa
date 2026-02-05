import { Routes, Route } from 'react-router-dom'
import EnterChat from './pages/EnterChat'
import { motion, AnimatePresence } from 'framer-motion'
import Invitation from './pages/Invitation'

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
                    <Route path='/invitation' element={<Invitation />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
    )
}

export default App
import { motion } from 'framer-motion';
import { Calendar } from './_calendar';
import { Clock } from './_time';
export default function Page() {
  return (
    <motion.section
      className="h-screen w-screen flex flex-col overflow-hidden cursor-none"
      animate={{ opacity: [0, 1] }}
    >
      <section className="h-full w-full flex">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <Clock size="50%" ease="easeInOut" arrowSecondsEase="linear" />
        </div>
        <Calendar />
      </section>
    </motion.section>
  );
}

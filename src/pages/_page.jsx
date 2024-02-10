import { motion } from 'framer-motion';
import { Calendar } from './_calendar';
import { Clock } from './_time';
export default function Page() {
  return (
    <motion.section
      className="h-svh w-svw flex flex-col cursor-none"
      animate={{ opacity: [0, 1] }}
    >
      <section className="h-full w-full flex justify-center items-center flex-wrap">
        <div className="h-svh flex flex-auto flex-col justify-center items-center">
          <Clock size="50svmin" ease="easeInOut" arrowSecondsEase="linear" />
        </div>
        <Calendar />
      </section>
    </motion.section>
  );
}

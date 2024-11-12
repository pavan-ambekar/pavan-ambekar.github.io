import { WavyBackground } from '@/components/ui/wavy-background';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

const words = [
    {
        text: 'Full-Stack',
    },
    {
        text: 'Developer.',
        className: 'text-green-500 dark:text-green-500',
    },
];

function App() {
    return (
        <WavyBackground className="max-w-4xl mx-auto pb-40">
            <p className="text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                Pavan A
            </p>
            <TypewriterEffect words={words} cursorClassName="bg-green-500" />
        </WavyBackground>
    );
}

export default App;

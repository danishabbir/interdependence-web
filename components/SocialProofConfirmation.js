import Box from "./core/Box";
import Checkmark from './core/Checkmark';
import Button from './core/Button';

export default function VerificationPopUp({ }) {
    return (
      <Box
        title="Thank you for signing!"
        content={
            <div className="my-6">
                <p className="font-mono">
                    We're heartened you'll join us in the Pluriverse. If you have a moment, please share what this vision means to you.
                 </p>
                <Button
                primary
                onClick={openModal}>
                  {/* Twitter icon */}
                  Share
                </Button>
                <button className="text-gray-400">
                    Close
                </button>
          </div>}
      />
    );
  }
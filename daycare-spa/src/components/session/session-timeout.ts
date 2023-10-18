import { useContext, useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import { IdleProps } from "../../types/global.typing";

export const useIdleTimeout = ({ onIdle, idleTime }: IdleProps) => {
  const idleTimeout = 1000 * idleTime;
  const [isIdle, setIdle] = useState(false);

  const handleIdle = () => {
    setIdle(true);
  };

  const idleTimer = useIdleTimer({
    timeout: idleTimeout,
    promptTimeout: idleTimeout / 2,
    onPrompt: onIdle,
    onIdle: handleIdle,
    debounce: 500,
  });

  return {
    isIdle,
    setIdle,
    idleTimer,
  };
};

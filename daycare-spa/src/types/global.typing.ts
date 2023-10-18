export interface IUser {
  userId: number;
  name: string;
  role: string;
}

export type IdleProps = {
  onIdle: () => void;
  idleTime: number; // number of seconds to wait
};

export interface Customer {
  _id: string;
  pseudo: string;
  totalSessions: number; // number of sessions
  totalDuration: number; // in Minutes
  totalDataUsed: number; // in GB
  lastSession?: Date;
  macAdress?: string;
  device?: string;
  isStudent: boolean;
}

export interface Session extends Customer {
  sessionId: string;
  ipAddress: string;
  startTime: Date;
  endTime?: Date;
  duration?: number; // in Minutes
  dataUsed?: number; // in GB
  amount?: number;
}

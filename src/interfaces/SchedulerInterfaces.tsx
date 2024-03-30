export interface Day {
  id: number;
  name: string;
  shortName: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  timeStart: string;
  timeEnd: string;
  date: string;
  color: string;
}

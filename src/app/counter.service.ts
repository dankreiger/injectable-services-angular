import { css } from './waggle-waggle-pup'
export class CounterService {
  private activeCount = 0;
  private inactiveCount = 0;
  logStatusChangeCount(status: string) {
    if (status === 'active') {
      this.activeCount++;
      console.log('%c%s', css, `Changed to active: ${this.activeCount} ${this.activeCount === 1 ? 'time' : 'times'}`);
    } else {
      this.inactiveCount++;
      console.log('%c%s', css, `Changed to inactive: ${this.inactiveCount} ${this.inactiveCount === 1 ? 'time' : 'times'}`);
    }
  }
}

type Observer<T> = (value: T) => void;

export class LiveData<T> {
  private observers: Observer<T>[] = [];
  private _value: T;

  constructor(initialValue: T) {
    this._value = initialValue;
  }

  get value(): T {
    return this._value;
  }

  set value(newValue: T) {
    if (newValue !== this._value) {
      this._value = newValue;
      this.notifyObservers();
    }
  }

  observe(observer: Observer<T>): () => void {
    this.observers.push(observer);
    // Immediately call with current value
    observer(this._value);
    return () => this.removeObserver(observer);
  }

  private notifyObservers() {
    for (const observer of this.observers) {
      observer(this._value);
    }
  }

  private removeObserver(observer: Observer<T>) {
    this.observers = this.observers.filter(o => o !== observer);
  }
}

export interface DataStore {
  data: LiveData<any>;
}
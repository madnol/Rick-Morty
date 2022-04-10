export interface ExampleValue {
  foo: string;
}

export interface State {
  loading: boolean;
  error?: string;
  list: ExampleValue[];
}

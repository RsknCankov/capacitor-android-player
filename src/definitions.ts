export interface CapacitorAndroidPlayerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

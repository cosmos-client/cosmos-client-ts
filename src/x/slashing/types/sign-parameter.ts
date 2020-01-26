export interface SignParameter {
  max_evidence_age: number;
  signed_blocks_window: number;
  min_signed_per_window: number;
  double_sign_unbond_duration: number;
  downtime_unbond_duration: number;
  slash_fraction_double_sign: number;
  slash_fraction_downtime: number;
}

export interface signingInfo {
    address: ConsAddress
    start_height: Int32Array
    index_offset: Int32Array
    jailed_until: Time
    tombstoned: boolean
    missed_blocks_counter: Int32Array
}
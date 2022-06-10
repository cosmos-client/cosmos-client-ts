import Long from 'long';
import * as $protobuf from 'protobufjs/minimal';

$protobuf.util.Long = Long;
$protobuf.configure();

export * as cosmosclient from './module';
export * as proto from './proto';
export * from './rest';
export * from './websocket';

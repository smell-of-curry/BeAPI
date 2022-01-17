import type { Player } from '../player'
import type { Entity } from '../entity'
import type { Block, BlockLocation, Dimension as IDimension, ItemStack } from 'mojang-minecraft'

export interface ClientEvents {
  OnChat: [OnChatEvent]
  OnJoin: [Player]
  OnLeave: [Player | string]
  Tick: [TickEvent]
  ItemUse: [ItemUseEvent]
  ItemInteract: [ItemInteractEvent]
  EntityDestroyed: [Entity]
  EntityCreated: [Entity]
  BlockDestroyed: [ClientBlockBreakEvent]
  BlockCreated: [ClientBlockEvent]
  PlayerInViewVector: [PlayerInViewVectorEvent]
  EntityInViewVector: [EntityInViewVectorEvent]
  PlayerTag: [PlayerTagEvent]
  EntityTag: [EntityTagEvent]
  EnteredWater: [Player]
  ExitedWater: [Player]
  StartedBurning: [Player]
  StoppedBurning: [Player]
  Jump: [Player]
  Landed: [Player]
  Explosion: [ExplosionEvent]
  StartedMoving: [Player]
  StoppedMoving: [Player]
  StartedRiding: [Player]
  StoppedRiding: [Player]
  StartedSleeping: [Player]
  StoppedSleeping: [Player]
  StartedSneaking: [Player]
  StoppedSneaking: [Player]
  StartedSprinting: [Player]
  StoppedSprinting: [Player]
  StartedSwimming: [Player]
  StoppedSwimming: [Player]
  Swing: [Player]
  EntityAttacked: [EntityInViewVectorEvent]
  PlayerAttacked: [PlayerInViewVectorEvent]
}

export interface OnChatEvent {
  sender: Player | undefined
  message: string
  cancel: CancelMethod
}

export interface TickEvent {
  currentTick: number
  deltaTime: number
}

export interface ItemUseEvent {
  source: Player | Entity | undefined
  item: ItemStack
  cancel: CancelMethod
}

export interface ItemInteractEvent {
  source: Player | Entity | undefined
  item: ItemStack
  block: Block
  blockLocation: BlockLocation
  direction: number
  faceLocationX: number
  faceLocationY: number
  cancel: CancelMethod
}

export interface ClientBlockBreakEvent {
  player: Player
  block: string
  blockLocation: BlockLocation
  dimension: IDimension
  cancel: CancelMethod
}

export interface ClientBlockEvent {
  player: Player
  block: Block
  dimension: IDimension
  cancel: CancelMethod
}

export interface PlayerInViewVectorEvent {
  target: Player
  player: Player
}

export interface EntityInViewVectorEvent {
  target: Entity
  player: Player
}

export interface PlayerTagEvent {
  player: Player
  tag: string
}

export interface EntityTagEvent {
  entity: Entity
  tag: string
}

export interface ExplosionEvent {
  source: Entity | undefined
  dimension: IDimension
  impactedBlocks: BlockLocation[]
  cancel: CancelMethod
}

export type CancelMethod = () => void

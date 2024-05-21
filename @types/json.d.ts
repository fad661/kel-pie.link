import { Position, PartType, CardSize } from ".";

export namespace Json {
  type Part = {
    slug: string;
    position: {
      x: Position['X'],
      y: Position['Y'],
      layer: Position['Layer']
    },
    content: {
      type: PartType
    }
  }

  type Card = {
    slug: string;
    parts: {
      front: string[],
      back: string[]
    }
    size: CardSize;
  }
}
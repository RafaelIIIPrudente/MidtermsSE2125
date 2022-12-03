import { Player } from "./Player";

export function subtractDate(date1: Date, date2: Date): number {
  return Math.abs((date1.getTime() - date2.getTime()) / 3600000);
}

export function hexToRGB(color1: string): number {
  const hex = color1.split("");

  const result = (parseInt(hex[0], 16) * 16)  + parseInt(hex[1], 16);

  return result;
}

export function hexToRGB2(color1: string): string {
  const hex = color1.match(/.{1,2}/g);
  const rgb = [
      parseInt(hex![0], 16),
      parseInt(hex![1], 16),
      parseInt(hex![2], 16)
  ];

  let result = ((rgb[0] * 0.299) + (rgb[1] * 0.587) + (rgb[2] * 0.114))

  if (result > 186) {
    return "#000000"
  } else {
    return "#FFFFFF"
  }
}

export function getAverageAge(players: Player[]): number {
 return 0
}


//i'll past the rest sir after the evnt this afternoon 





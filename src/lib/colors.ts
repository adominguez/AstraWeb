export const COLORS = {
  TEAL_TEXT_COLOR_500: 'text-teal-500',
  TEAL_BG_500: 'bg-teal-500',
  AMBER_TEXT_COLOR_100: 'text-amber-100',
  AMBER_TEXT_COLOR_400: 'text-amber-400',
  AMBER_BG_200: 'bg-amber-200',
  INMOBILIARIA_BG: 'bg-inmobiliaria4',
  MONITORING_BG: 'bg-monitoring',
  PORTICO_BG: 'bg-portico',
  SKY_TEXT_COLOR_500: 'text-sky-500',
  SKY_BG_300: 'bg-sky-300',
  YELLOW_BG_400: 'bg-yellow-400',
  GRAY_TEXT_900: 'text-gray-900',
  BLUE_BG_500: 'bg-blue-500',
  WHITE_TEXT_COLOR: 'text-white',
  GREEN_BG_500: 'bg-green-500',
  PINK_BG_500: 'bg-pink-500',
  PURPLE_BG_600: 'bg-purple-600',
  ORANGE_BG_500: 'bg-orange-500',
} as const;


export const getColor = (color: string) => COLORS[color as keyof typeof COLORS];

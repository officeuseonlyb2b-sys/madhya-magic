import {
  Mountain,
  Landmark,
  PawPrint,
  Flower2,
  Sunrise,
  Tent,
  Home,
  ShoppingBag,
  TreePine,
  Sparkles,
  Bird,
  Footprints,
  Waves,
  Compass,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the emoji strings used throughout the data layer to elegant
 * Lucide icons. Returns a thin-stroke monochrome icon component so the
 * existing data files don't have to change.
 */
const EMOJI_TO_ICON: Record<string, LucideIcon> = {
  "🌄": Mountain,
  "🏔️": Mountain,
  "🌅": Sunrise,
  "🌿": TreePine,
  "🌸": Flower2,
  "🏛️": Landmark,
  "🛕": Landmark,
  "🕉️": Flower2,
  "🐅": PawPrint,
  "🐾": PawPrint,
  "🦌": Bird,
  "🏕️": Tent,
  "🏘️": Home,
  "🛍️": ShoppingBag,
  "🕳️": Compass,
  "💧": Waves,
  "✨": Sparkles,
  "🚶": Footprints,
};

interface IconForProps {
  name?: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

/**
 * Render a premium Lucide icon mapped from the legacy emoji string.
 * Falls back to Sparkles when the emoji is unknown.
 */
export const IconFor = ({
  name,
  size = 18,
  className = "",
  strokeWidth = 1.5,
}: IconForProps) => {
  const Icon = (name && EMOJI_TO_ICON[name]) || Sparkles;
  return <Icon size={size} strokeWidth={strokeWidth} className={className} />;
};

export const getIconFor = (name?: string): LucideIcon =>
  (name && EMOJI_TO_ICON[name]) || Sparkles;

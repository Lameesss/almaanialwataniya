import {
  Stethoscope,
  Activity,
  Syringe,
  BedDouble,
  Baby,
  HeartPulse,
  Monitor,
  ScanLine,
  Droplets,
  Gauge,
  Milk,
  Hand,
  Accessibility,
  Wind,
  Thermometer,
  Zap,
  Bandage,
  Heart,
  PersonStanding,
  Circle,
} from 'lucide-react';

// Explicit registry of the icons referenced by `name` in data files.
// Keeping this list explicit lets the bundler tree-shake Lucide.
const registry = {
  Stethoscope,
  Activity,
  Syringe,
  BedDouble,
  Baby,
  HeartPulse,
  Monitor,
  ScanLine,
  Droplets,
  Gauge,
  Milk,
  Hand,
  Accessibility,
  Wind,
  Thermometer,
  Zap,
  Bandage,
  Heart,
  PersonStanding,
};

// Usage: <Icon name="Stethoscope" className="h-6 w-6" />
export default function Icon({ name, ...props }) {
  const Cmp = registry[name] || Circle;
  return <Cmp {...props} />;
}

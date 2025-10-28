import { Input } from "@/app/components/ui.shadcn.com/input"
import { Label } from "@/app/components/ui.shadcn.com/label"

export function InputWithLabel({ id, placeholder, title, type = "input", ...props }:React.ComponentProps<typeof Input>) {
  return (
    <div className="w-full max-w-sm items-center">
      <Label htmlFor={id} className="w-full font-ubuntu text-xl mb-2">{title}</Label>
      <Input type={type} id={id} placeholder={placeholder} title={title} {...props} />
    </div>
  )
}

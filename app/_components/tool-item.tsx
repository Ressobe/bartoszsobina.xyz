import Image from "next/image";

type ToolItemProps = {
  name: string;
  imageSrc: string;
};

export function ToolItem({ imageSrc, name }: ToolItemProps) {
  return (
    <div className="bg-secondary flex items-center gap-2 rounded-2xl py-2 px-4 mx-2 text-sm border border-muted-foreground/30">
      <Image src={imageSrc} alt={`${name} icon`} width={25} height={25} />
      {name}
    </div>
  );
}

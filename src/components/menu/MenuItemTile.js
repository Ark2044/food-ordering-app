import Image from "next/image";
import AddToCartButton from "@/components/menu/AddToCartButton";

export default function MenuItemTile({ onAddToCart, ...item }) {
  const { image, description, name, basePrice, sizes, extraIngredientPrices } =
    item;
  const hasSizesOrExtras =
    sizes?.length > 0 || extraIngredientPrices?.length > 0;

  return (
    <div className="bg-gray-200 p-4 rounded-lg flex flex-col justify-between group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="mx-auto">
        <Image
          src={image}
          className="max-h-24 block mx-auto"
          alt="pizza"
          width={200}
          height={200} // Adjusted height for uniformity
        />
      </div>
      <div className="text-center">
        <h4 className="font-semibold text-xl my-3">{name}</h4>
        <p className="text-gray-500 text-sm line-clamp-3">{description}</p>
      </div>
      <AddToCartButton
        image={image}
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
      />
    </div>
  );
}

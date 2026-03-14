import { Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "919356048383";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${PHONE_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
        >
          <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.47.648 4.886 1.88 7.01L2 30l7.19-1.857A13.93 13.93 0 0016.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.456a11.39 11.39 0 01-5.812-1.598l-.416-.248-4.268 1.102 1.13-4.142-.272-.43a11.41 11.41 0 01-1.748-6.137c0-6.31 5.137-11.447 11.386-11.447 6.252 0 11.388 5.137 11.388 11.447 0 6.253-5.136 11.453-11.388 11.453zm6.26-8.572c-.344-.172-2.036-1.004-2.352-1.12-.314-.115-.543-.172-.772.173-.228.344-.884 1.12-1.083 1.35-.2.23-.4.258-.743.086-.345-.172-1.454-.536-2.77-1.71-1.024-.915-1.714-2.044-1.916-2.388-.2-.345-.022-.531.15-.702.154-.155.345-.402.517-.604.172-.2.23-.345.345-.573.115-.23.058-.43-.03-.604-.086-.172-.772-1.862-1.056-2.55-.28-.67-.563-.578-.773-.59l-.656-.01c-.23 0-.603.086-.918.43-.315.344-1.2 1.174-1.2 2.863s1.228 3.322 1.4 3.55c.172.23 2.416 3.69 5.856 5.173.819.354 1.458.564 1.956.722.822.26 1.571.224 2.163.136.66-.099 2.036-.832 2.322-1.636.287-.803.287-1.492.2-1.636-.085-.143-.313-.23-.657-.4z" />
        </svg>
      </a>

      {/* Call Button */}
      <a
        href={`tel:+${PHONE_NUMBER}`}
        aria-label="Call us"
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}

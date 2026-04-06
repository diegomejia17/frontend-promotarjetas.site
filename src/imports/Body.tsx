import svgPaths from "./svg-8ee6ce39e2";
import imgAb6AXuCnnH0FnHk1FVWwEWZUodd7WptIk395Whcm0NYbQyi0QnWcBq6Nxu7UQvcDdfFrWxvR9VvQw5E3AvWh7OSjqjlVh2J1IWcE9Amk3QasXr0U0G6R67ISilxPzlCZmk3KExoDizboOmIaYs3ZNfQqtsZzlDropKrXrJKrd8D11TUqgvJo3JSkJ1Tw86Dq9XuUzDmc9FoGuPgcApJh6Hx6Mj85FrRxCeN1YyKcHfkOGnsBgzKiSgnsZz4JmkvIu5M9L6WERo from "figma:asset/f2aa10fd9a17678e5bc459760c15bb6b7182beb7.png";
import imgAb6AXuD6ArZx33Er7MEUmEbWxkjqXeywOcSuLjglvbG5M9RlZwxr9Ss7BfOvyRcDuJk8Ku58MVb6ZSsGj7W4Mv3Tg41GpHkKTb9MnLbHh4G8Ps5ZsH9N25LPt33RnZoBujFfbvSkfr3B2Ctdo15VW3W8JqM7IRCUhjPWItTtV7JuCoj5F1FsaZoPoy5HwNodiBfSe45M915XlAsc8Dy0XXp0DptGmT1FsHcZ9SV4Svnk1HoC7KxkToj3A9O1Cfg7CTWy4VuFuY from "figma:asset/33e004f21e51dbffcf98af981c7981ae6f056f1f.png";
import imgAb6AXuACe1TIfxrKcU3HdOmQkSrfLdFsFbmASmTjtigKtCEecHl2YMuPcw3Cm9Eeup1TzAIhH0KIuLObMBaRkozK7Me5HsGIbNdnNugDePyj3QpzAdCgnVOk65SgYcuArLlWwpjabVJb8S0D8UwiR2C3OoZhGzdNusi3BPn7NfmqAN7ThrhaGjIJfI25FVelqgamvCxqhxdLEc1CouB0N7JkDcNafyHe1B78Z7KkUso2Fhqx16EaGBGtHHez2LaQlTvuhkJvz4 from "figma:asset/a75423a0ae978676d9ae2e0448218621634e5a0d.png";

function Background() {
  return (
    <div className="bg-[#cfeace] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#3e553f] text-[12px] tracking-[1.2px] uppercase w-[173.09px]">
        <p className="leading-[16px]">Descubre El Salvador</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[36px] text-white tracking-[-0.9px] w-full">
        <p className="leading-[45px] mb-0">Las</p>
        <p className="leading-[45px] mb-0">promociones de</p>
        <p className="leading-[45px]">tus tarjetas en un solo lugar</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[512px] opacity-90 pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[29.25px] mb-0">Explora beneficios exclusivos</p>
        <p className="leading-[29.25px]">proporcionados para maximizar tu ahorro con el uso de tus tarjetas de bancos locales.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#3c525d] text-[16px] text-center w-[97.14px]">
        <p className="leading-[24px]">Explorar hoy</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[672px] relative shrink-0 w-full" data-name="Container">
      <Background />
      <Heading />
      <Container1 />
      <Container2 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] overflow-clip p-[32px] right-[24px] rounded-[24px] top-[96px]" data-name="Hero Section" style={{ backgroundImage: "linear-gradient(124.107deg, rgb(60, 82, 93) 0%, rgb(84, 106, 118) 100%)" }}>
      <div className="absolute inset-[33.33px_-22.71%_383.33px_69.1%]" data-name="Icon">
        <div className="absolute inset-[0_0_-50.94%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183.333 133.333">
            <path d={svgPaths.p1bfbe600} fill="var(--fill-0, white)" id="Icon" opacity="0.1" />
          </svg>
        </div>
      </div>
      <Container />
    </div>
  );
}

function Ab6AXuCnnH0FnHk1FVWwEWZUodd7WptIk395Whcm0NYbQyi0QnWcBq6Nxu7UQvcDdfFrWxvR9VvQw5E3AvWh7OSjqjlVh2J1IWcE9Amk3QasXr0U0G6R67ISilxPzlCZmk3KExoDizboOmIaYs3ZNfQqtsZzlDropKrXrJKrd8D11TUqgvJo3JSkJ1Tw86Dq9XuUzDmc9FoGuPgcApJh6Hx6Mj85FrRxCeN1YyKcHfkOGnsBgzKiSgnsZz4JmkvIu5M9L6WERo() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="AB6AXuCnnH0fnHk1fVWwE_wZUodd7wptIk395whcm0NYbQyi0QnWcBq-6NXU7uQVCDdfFrWxvR9-vvQw5e3avWH7oSjqjlVH-2j1iWcE9Amk3QASXr0u0g6R67iSILXPzlCZmk3kEXODizboOMIa_Ys3Z-nfQqtsZzlDropKrXrJKrd8d11TUqgvJo3jSkJ-1TW86DQ9XuUzDMC9FoGuPGCApJh_6hx6-Mj85FrRXCeN1yyKCHfkOGnsBgzKiSGNSZz4JMKVIu5m9l6wERo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[152.68%] left-0 max-w-none top-[-26.34%] w-full" src={imgAb6AXuCnnH0FnHk1FVWwEWZUodd7WptIk395Whcm0NYbQyi0QnWcBq6Nxu7UQvcDdfFrWxvR9VvQw5E3AvWh7OSjqjlVh2J1IWcE9Amk3QasXr0U0G6R67ISilxPzlCZmk3KExoDizboOmIaYs3ZNfQqtsZzlDropKrXrJKrd8D11TUqgvJo3JSkJ1Tw86Dq9XuUzDmc9FoGuPgcApJh6Hx6Mj85FrRxCeN1YyKcHfkOGnsBgzKiSgnsZz4JmkvIu5M9L6WERo} />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#3e553f] content-stretch flex flex-col items-start left-[16px] px-[12px] py-[3.5px] rounded-[12px] top-[12px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.6px] uppercase w-[90.63px]">
        <p className="leading-[16px]">20% Cashback</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[224px] items-start justify-center overflow-clip relative shrink-0 w-full z-[2]" data-name="Container">
      <Ab6AXuCnnH0FnHk1FVWwEWZUodd7WptIk395Whcm0NYbQyi0QnWcBq6Nxu7UQvcDdfFrWxvR9VvQw5E3AvWh7OSjqjlVh2J1IWcE9Amk3QasXr0U0G6R67ISilxPzlCZmk3KExoDizboOmIaYs3ZNfQqtsZzlDropKrXrJKrd8D11TUqgvJo3JSkJ1Tw86Dq9XuUzDmc9FoGuPgcApJh6Hx6Mj85FrRxCeN1YyKcHfkOGnsBgzKiSgnsZz4JmkvIu5M9L6WERo />
      <Background1 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#dc2626] content-stretch flex items-center justify-center pb-[5px] pt-[4px] relative rounded-[12px] shrink-0 size-[24px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white w-[20.84px]">
        <p className="leading-[15px]">BAC</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#73787b] text-[10px] tracking-[1px] uppercase w-[104.58px]">
        <p className="leading-[15px]">BAC Credomatic</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Background2 />
      <Container6 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Margin">
      <Container5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3c525d] text-[20px] w-full">
        <p className="leading-[28px]">Cenas Gourmet en El Salvador</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1.25px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[69px] justify-center leading-[0] not-italic relative shrink-0 text-[#42474b] text-[14px] w-[292.3px]">
        <p className="leading-[22.75px] mb-0">Disfruta de un descuento exclusivo en</p>
        <p className="leading-[22.75px] mb-0">restaurantes seleccionados al pagar con tus</p>
        <p className="leading-[22.75px]">tarjetas Platinum y Black.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[92.25px] relative shrink-0 w-full" data-name="Margin">
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p3bb7dc80} fill="var(--fill-0, #73787B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#73787b] text-[10px] tracking-[0.5px] uppercase w-[123.22px]">
        <p className="leading-[15px]">Vigencia: 31 Dic 2023</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #3C525D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(194,199,203,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container8 />
      <Container11 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative w-full">
        <Margin />
        <Heading3Margin />
        <Margin1 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip relative rounded-[24px] row-1 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Card 1">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Ab6AXuD6ArZx33Er7MEUmEbWxkjqXeywOcSuLjglvbG5M9RlZwxr9Ss7BfOvyRcDuJk8Ku58MVb6ZSsGj7W4Mv3Tg41GpHkKTb9MnLbHh4G8Ps5ZsH9N25LPt33RnZoBujFfbvSkfr3B2Ctdo15VW3W8JqM7IRCUhjPWItTtV7JuCoj5F1FsaZoPoy5HwNodiBfSe45M915XlAsc8Dy0XXp0DptGmT1FsHcZ9SV4Svnk1HoC7KxkToj3A9O1Cfg7CTWy4VuFuY() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="AB6AXuD6ArZx33ER7mEUmEbWXKJQXeywOcSULjglvbG5M9rlZWXR9ss7bfOvyRCDuJk8ku5-8mVb6zSsGj7w4MV3Tg41gpHkKTb9mnLbHH4G8Ps5zsH9N25l_Pt33rnZoBujFFBVSkfr3b2Ctdo15vW3w8JqM7I_rCUhjP-_wItTtV7juCoj-5F1FsaZoPoy5hwNodiBfSe45M915xlASC8Dy0X-XP0dptGmT1fsHcZ9sV4-SVNK1hoC7KxkTOJ3A9o1CFG7C_tWY4vuFuY">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[152.68%] left-0 max-w-none top-[-26.34%] w-full" src={imgAb6AXuD6ArZx33Er7MEUmEbWxkjqXeywOcSuLjglvbG5M9RlZwxr9Ss7BfOvyRcDuJk8Ku58MVb6ZSsGj7W4Mv3Tg41GpHkKTb9MnLbHh4G8Ps5ZsH9N25LPt33RnZoBujFfbvSkfr3B2Ctdo15VW3W8JqM7IRCUhjPWItTtV7JuCoj5F1FsaZoPoy5HwNodiBfSe45M915XlAsc8Dy0XXp0DptGmT1FsHcZ9SV4Svnk1HoC7KxkToj3A9O1Cfg7CTWy4VuFuY} />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#3c525d] content-stretch flex flex-col items-start left-[16px] px-[12px] py-[3.5px] rounded-[12px] top-[12px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.6px] uppercase w-[93.61px]">
        <p className="leading-[16px]">Supermercado</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col h-[224px] items-start justify-center overflow-clip relative shrink-0 w-full z-[2]" data-name="Container">
      <Ab6AXuD6ArZx33Er7MEUmEbWxkjqXeywOcSuLjglvbG5M9RlZwxr9Ss7BfOvyRcDuJk8Ku58MVb6ZSsGj7W4Mv3Tg41GpHkKTb9MnLbHh4G8Ps5ZsH9N25LPt33RnZoBujFfbvSkfr3B2Ctdo15VW3W8JqM7IRCUhjPWItTtV7JuCoj5F1FsaZoPoy5HwNodiBfSe45M915XlAsc8Dy0XXp0DptGmT1FsHcZ9SV4Svnk1HoC7KxkToj3A9O1Cfg7CTWy4VuFuY />
      <Background3 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#15803d] content-stretch flex items-center justify-center pb-[5px] pt-[4px] relative rounded-[12px] shrink-0 size-[24px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white w-[14.38px]">
        <p className="leading-[15px]">AG</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#73787b] text-[10px] tracking-[1px] uppercase w-[104.69px]">
        <p className="leading-[15px]">Banco Agrícola</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Background4 />
      <Container15 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Margin">
      <Container14 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3c525d] text-[20px] w-full">
        <p className="leading-[28px] mb-0">Ahorro en Compras</p>
        <p className="leading-[28px]">Semanales</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1.25px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[69px] justify-center leading-[0] not-italic relative shrink-0 text-[#42474b] text-[14px] w-[286.44px]">
        <p className="leading-[22.75px] mb-0">Aprovecha un 15% de descuento inmediato</p>
        <p className="leading-[22.75px] mb-0">en Súper Selectos todos los martes del</p>
        <p className="leading-[22.75px]">mes.</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[92.25px] relative shrink-0 w-full" data-name="Margin">
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p3bb7dc80} fill="var(--fill-0, #73787B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#73787b] text-[10px] tracking-[0.5px] uppercase w-[127.8px]">
        <p className="leading-[15px]">Vigencia: 15 Nov 2023</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #3C525D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(194,199,203,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container17 />
      <Container20 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative w-full">
        <Margin2 />
        <Heading3Margin1 />
        <Margin3 />
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip relative rounded-[24px] row-2 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Card 2">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Ab6AXuACe1TIfxrKcU3HdOmQkSrfLdFsFbmASmTjtigKtCEecHl2YMuPcw3Cm9Eeup1TzAIhH0KIuLObMBaRkozK7Me5HsGIbNdnNugDePyj3QpzAdCgnVOk65SgYcuArLlWwpjabVJb8S0D8UwiR2C3OoZhGzdNusi3BPn7NfmqAN7ThrhaGjIJfI25FVelqgamvCxqhxdLEc1CouB0N7JkDcNafyHe1B78Z7KkUso2Fhqx16EaGBGtHHez2LaQlTvuhkJvz() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="AB6AXuACe1TIfxrKcU3HdOmQKSrfLdFSFbmA_smTJTIGKtCEecHl2YMuPcw3Cm9Eeup1TzAIhH0_KIuLObMBaRkozK7ME5HsGIbNDNNugDePYJ3qpzADCgnVOk65_Sg-YcuARLlWwpjabVJb8s0D8UwiR2c3ooZhGZDNusi3bPN7nfmqA_n7ThrhaGj_iJfI25fVelqgamvCxqhxdLEc1couB0N7JkDCNafyHE1b78z7KkUso2fhqx16_eaG-bGT_hHez2LAQlTvuhkJvz4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[152.68%] left-0 max-w-none top-[-26.34%] w-full" src={imgAb6AXuACe1TIfxrKcU3HdOmQkSrfLdFsFbmASmTjtigKtCEecHl2YMuPcw3Cm9Eeup1TzAIhH0KIuLObMBaRkozK7Me5HsGIbNdnNugDePyj3QpzAdCgnVOk65SgYcuArLlWwpjabVJb8S0D8UwiR2C3OoZhGzdNusi3BPn7NfmqAN7ThrhaGjIJfI25FVelqgamvCxqhxdLEc1CouB0N7JkDcNafyHe1B78Z7KkUso2Fhqx16EaGBGtHHez2LaQlTvuhkJvz4} />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#cbe4ec] content-stretch flex flex-col items-start left-[16px] px-[12px] py-[3.5px] rounded-[12px] top-[12px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#4f666e] text-[12px] tracking-[-0.6px] uppercase w-[87.27px]">
        <p className="leading-[16px]">Millas Dobles</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col h-[224px] items-start justify-center overflow-clip relative shrink-0 w-full z-[2]" data-name="Container">
      <Ab6AXuACe1TIfxrKcU3HdOmQkSrfLdFsFbmASmTjtigKtCEecHl2YMuPcw3Cm9Eeup1TzAIhH0KIuLObMBaRkozK7Me5HsGIbNdnNugDePyj3QpzAdCgnVOk65SgYcuArLlWwpjabVJb8S0D8UwiR2C3OoZhGzdNusi3BPn7NfmqAN7ThrhaGjIJfI25FVelqgamvCxqhxdLEc1CouB0N7JkDcNafyHe1B78Z7KkUso2Fhqx16EaGBGtHHez2LaQlTvuhkJvz />
      <Background5 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#1e40af] content-stretch flex items-center justify-center pb-[5px] pt-[4px] relative rounded-[12px] shrink-0 size-[24px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white w-[14.13px]">
        <p className="leading-[15px]">DV</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#73787b] text-[10px] tracking-[1px] uppercase w-[71.19px]">
        <p className="leading-[15px]">Davivienda</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Background6 />
      <Container24 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Margin">
      <Container23 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3c525d] text-[20px] w-full">
        <p className="leading-[28px]">Escápate estas Vacaciones</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading3 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1.25px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[69px] justify-center leading-[0] not-italic relative shrink-0 text-[#42474b] text-[14px] w-[261.7px]">
        <p className="leading-[22.75px] mb-0">Acumula el doble de millas en todas tus</p>
        <p className="leading-[22.75px] mb-0">compras internacionales y reservas de</p>
        <p className="leading-[22.75px]">hotel.</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="h-[92.25px] relative shrink-0 w-full" data-name="Margin">
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p3bb7dc80} fill="var(--fill-0, #73787B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#73787b] text-[10px] tracking-[0.5px] uppercase w-[129.88px]">
        <p className="leading-[15px]">Vigencia: 30 Oct 2023</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #3C525D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(194,199,203,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container26 />
      <Container29 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative w-full">
        <Margin4 />
        <Heading3Margin2 />
        <Margin5 />
        <HorizontalBorder2 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col isolate items-start justify-self-stretch overflow-clip relative rounded-[24px] row-3 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Card 3">
      <Container21 />
      <Container22 />
    </div>
  );
}

function SectionPromotionsGrid() {
  return (
    <div className="absolute gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___477.25px_505.25px_477.25px] left-[24px] right-[24px] top-[998px]" data-name="Section - Promotions Grid">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(115,120,123,0.7)] w-full">
        <p className="leading-[normal]">¿Qué beneficio buscas hoy?</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#efe7dd] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[56px] pr-[24px] py-[18px] relative w-full">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Search Bar">
      <Input />
      <div className="absolute bottom-[33.93%] left-[23px] top-[33.93%] w-[18px]" data-name="Icon">
        <div className="absolute inset-[0_0_-1.82%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p8a35e00} fill="var(--fill-0, #73787B)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#73787b] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Bancos Asociados</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pl-[4px] relative w-full">
        <Container32 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#cbe4ec] content-stretch flex flex-col items-center justify-center left-0 pb-[9.5px] pt-[8.5px] px-[20px] rounded-[12px] top-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#4f666e] text-[14px] text-center w-[41.63px]">
        <p className="leading-[20px]">Todos</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#fbf2e8] content-stretch flex flex-col items-center justify-center left-[93.63px] px-[21px] py-[9px] rounded-[12px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(194,199,203,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#42474b] text-[14px] text-center w-[28.88px]">
        <p className="leading-[20px]">BAC</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#fbf2e8] content-stretch flex flex-col items-center justify-center left-[176.5px] px-[21px] py-[9px] rounded-[12px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(194,199,203,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#42474b] text-[14px] text-center w-[55.56px]">
        <p className="leading-[20px]">Agrícola</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#fbf2e8] content-stretch flex flex-col items-center justify-center left-[286.06px] px-[21px] py-[9px] rounded-[12px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(194,199,203,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#42474b] text-[14px] text-center w-[74.23px]">
        <p className="leading-[20px]">Davivienda</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#fbf2e8] content-stretch flex flex-col items-center justify-center left-[414.3px] px-[21px] py-[9px] rounded-[12px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(194,199,203,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#42474b] text-[14px] text-center w-[67.08px]">
        <p className="leading-[20px]">Cuscatlán</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[42px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function ChipsBanks() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Chips: Banks">
      <Margin6 />
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#73787b] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Categorías Populares</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pl-[4px] relative w-full">
        <Container34 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[8.75px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 11.6667">
        <g id="Container">
          <path d={svgPaths.p16697200} fill="var(--fill-0, #42474B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-0 px-[21px] py-[9px] rounded-[8px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(194,199,203,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container36 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#42474b] text-[14px] text-center w-[87.97px]">
        <p className="leading-[20px]">Restaurantes</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[11.656px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6559 11.6667">
        <g id="Container">
          <path d={svgPaths.p2b1fee80} fill="var(--fill-0, #42474B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[163.98px] px-[21px] py-[9px] rounded-[8px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(194,199,203,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container37 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#42474b] text-[14px] text-center w-[106.56px]">
        <p className="leading-[20px]">Supermercados</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[10.587px] relative shrink-0 w-[12.063px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.063 10.5875">
        <g id="Container">
          <path d={svgPaths.p19d0e280} fill="var(--fill-0, #42474B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[346.56px] px-[21px] py-[9px] rounded-[8px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(194,199,203,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container38 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#42474b] text-[14px] text-center w-[40.7px]">
        <p className="leading-[20px]">Viajes</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 12.25">
        <g id="Container">
          <path d={svgPaths.p2bc15d20} fill="var(--fill-0, #42474B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[463.28px] px-[21px] py-[9px] rounded-[8px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(194,199,203,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container39 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#42474b] text-[14px] text-center w-[60.66px]">
        <p className="leading-[20px]">Compras</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[46px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function ChipsCategories() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Chips: Categories">
      <Margin7 />
      <Container35 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <SearchBar />
      <ChipsBanks />
      <ChipsCategories />
    </div>
  );
}

function SectionSearchFilters() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,248,242,0.8)] content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Section - Search & Filters">
      <Container30 />
    </div>
  );
}

function SectionSearchFiltersMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[40px] right-[24px] top-[694px]" data-name="Section - Search & Filters:margin">
      <SectionSearchFilters />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[2633.75px] max-w-[1280px] relative shrink-0 w-full" data-name="Main">
      <HeroSection />
      <SectionPromotionsGrid />
      <SectionSearchFiltersMargin />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_-63.86%_-34.85%_0.05%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.057 37.757">
        <g id="Group">
          <path d={svgPaths.p9737400} fill="var(--fill-0, #405D70)" id="Union" />
          <path d={svgPaths.p37dc3700} fill="var(--fill-0, #627C88)" id="Vector" />
          <path d={svgPaths.p12bf4100} fill="var(--fill-0, #83A0AA)" id="Vector_2" />
          <g id="Vector_3" />
          <g id="Vector_4" />
          <g id="Vector_5" />
          <g id="Vector_6" />
          <g id="Vector_7" />
          <g id="Vector_8" />
          <path d={svgPaths.p37a8d000} fill="var(--fill-0, #C8CDC3)" id="Vector_9" />
          <path d={svgPaths.p56dd880} fill="var(--fill-0, #C4AD7A)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[12px] relative shrink-0 w-[156px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#405d70] text-[12px] top-[8px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">promotarjetas.site</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[64px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[5px] items-center justify-center max-w-[inherit] px-[24px] py-[10px] relative size-full">
          <div className="aspect-[617/528] flex-[1_0_0] min-h-px min-w-px overflow-clip relative">
            <Group />
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,248,242,0.9)] content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="Header - TopAppBar">
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 shadow-[0px_32px_64px_-15px_rgba(31,27,21,0.06)] top-0 w-[390px]" data-name="Header - TopAppBar:shadow" />
      <Container40 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#3c525d] text-[18px] tracking-[-0.9px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">promotarjetas.site</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.875px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#42474b] text-[14px] text-center w-full">
        <p className="leading-[22.75px]">{`La guía definitiva de beneficios bancarios en El Salvador. `}</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center pb-[15px] relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3c525d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Sobre el sitio</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#42474b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Diego.proyectos.me</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#42474b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Legal</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[104px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <List />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3c525d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Síguenos</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2b729200} fill="var(--fill-0, #3C525D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#eae1d7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Link">
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.pf778600} fill="var(--fill-0, #3C525D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#eae1d7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Link">
      <Container49 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#73787b] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">El Salvador, 2026</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center pb-[40px] relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container47 />
      <Container50 />
    </div>
  );
}

function Container41() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center max-w-[inherit] px-[24px] relative w-full">
          <Container42 />
          <Container45 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute bg-[#fff8f2] bottom-0 content-stretch flex flex-col items-center left-0 pt-px w-[390px]" data-name="BottomNavBar">
      <div aria-hidden="true" className="absolute border-[rgba(251,242,232,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 shadow-[0px_-8px_24px_-10px_rgba(31,27,21,0.04)] top-[-28.13px] w-[390px]" data-name="BottomNavBar:shadow" />
      <Container41 />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#fff8f2] content-stretch flex flex-col items-start relative size-full" data-name="Body">
      <Main />
      <HeaderTopAppBar />
      <BottomNavBar />
      <div className="absolute backdrop-blur-[2px] bg-[rgba(31,27,21,0.2)] inset-0 opacity-0" data-name="Overlay+OverlayBlur" />
    </div>
  );
}
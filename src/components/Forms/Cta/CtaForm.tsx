import { useRef, useState } from 'preact/hooks';

const STEPS = [
  {
    title: 'Datos personales',
    fields: [
      {
        name: 'name',
        type: 'text',
        placeholder: 'Tu nombre completo',
        required: true,
      },
      {
        name: 'email',
        type: 'email',
        placeholder: '',
      },
      {
        name: 'phone',
        type: 'tel',
        placeholder: 'Tu número de teléfono (opcional)',
      },
    ],
  },
  {
    title: 'Datos del proyecto',
    fields: [
      {
        name: 'projectType',
        type: 'select',
        options: [
          {
            value: 'corporative',
            label: 'Página Web Corporativa',
          },
          {
            value: 'ecommerce',
            label: 'Tienda Online',
          },
          {
            value: 'landing',
            label: 'Landing Page',
          },
          {
            value: 'portfolio',
            label: 'Portafolio',
          },
          {
            value: 'custom',
            label: 'Proyecto Personalizado',
          },
        ],
      },
      {
        name: 'deliveryTime',
        type: 'select',
        options: [
          {
            value: '1',
            label: '2 - 3 semanas',
          },
          {
            value: '2',
            label: '4 - 6 semanas',
          },
          {
            value: '3',
            label: '7 - 10 semanas',
          },
          {
            value: '4',
            label: '+ 10 semanas',
          },
        ],
      },
      {
        name: 'features',
        type: 'checkbox',
        options: [
          {
            name: 'responsive',
            label: 'Diseño Responsivo',
          },
          {
            name: 'seo',
            label: 'Optimización SEO',
          },
          {
            name: 'analytics',
            label: 'Integración con Google Analytics',
          },
          {
            name: 'social',
            label: 'Integración con Redes Sociales',
          },
          {
            name: 'custom',
            label: 'Diseño Personalizado',
          },
        ],
      },
    ],
  },
]

export default function CtaForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [features, setFeatures] = useState([]);
  const [step, setStep] = useState(STEPS[0].title);

  return (
    <form method="POST">
      {
        step === STEPS[0].title && (
          <div class="personal-data flex flex-col gap-4 animate-fade">
            <label class="flex flex-col gap-2 text-slate-400">
              Nombre:
              <input
                type="text"
                name="username"
                placeholder="Tu nombre completo"
                required
                value={name}
                onChange={(e) => setName((e.target as HTMLInputElement).value)}
                class="px-4 py-2 rounded-full bg-transparent border border-slate-500 focus:border-white transition-colors outline-none"
              />
            </label>
            <label class="flex flex-col gap-2 text-slate-400">
              Email:
              <input
                type="email"
                name="email"
                placeholder="tucorreo@example.com"
                required
                value={email}
                onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                class="px-4 py-2 rounded-full bg-transparent border border-slate-500 focus:border-white transition-colors outline-none"
              />
            </label>
            <label class="flex flex-col gap-2 text-slate-400">
              Teléfono:
              <input
                type="tel"
                placeholder="Tu número de teléfono (opcional)"
                name="email"
                value={phone}
                onChange={(e) => setPhone((e.target as HTMLInputElement).value)}
                class="px-4 py-2 rounded-full bg-transparent border border-slate-500 focus:border-white transition-colors outline-none"
              />
            </label>
            <footer class="flex justify-end">
              <button class="next" onClick={() => setStep(STEPS[1].title)}>Siguiente</button>
            </footer>
          </div>
        )
      }
      {
        step === STEPS[1].title && (
          <div class="project-data flex-col gap-4 animate-fade hidden">
            <label class="flex flex-col gap-2 text-slate-400">
              Tipo de proyecto:
              <select
                value={projectType}
                name="projectType"
                required
                class="px-4 py-2 pr-8 rounded-full bg-transparent border border-slate-500 focus:border-white transition-colors appearance-none"
              >
                <option value="" disabled selected>Selecciona una opción</option>
                <option value="corporative">Página Web Corporativa</option>
                <option value="ecommerce">Tienda Online</option>
                <option value="landing">Landing Page</option>
                <option value="portfolio">Portafolio</option>
                <option value="custom">Proyecto Personalizado</option>
              </select>
            </label>
            <label class="flex flex-col gap-2 text-slate-400">
              Plazo de entrega:
              <select
                value={deliveryTime}
                name="deliveryTime"
                required
                class="px-4 py-2 pr-8 rounded-full bg-transparent border border-slate-500 focus:border-white transition-colors appearance-none"
              >
                <option value="" disabled selected>Selecciona una opción</option>
                <option value="1">2 - 3 semanas</option>
                <option value="2">4 - 6 semanas</option>
                <option value="3">7 - 10 semanas</option>
                <option value="4">+ 10 semanas</option>
              </select>
            </label>
            <label class="flex flex-col gap-2 text-slate-400">
              Características adicionales:
              <div class="flex flex-wrap gap-2 mt-2 items-center">
                {/* {
                  services.map(({ name, label }) => (
                    <div class="flex items-center gap-2">
                      <label
                        class={`relative flex items-center p-3 rounded-full cursor-pointer`}
                        htmlFor={name}
                      >
                        <input
                          type="checkbox"
                          name="features"
                          id={name}
                          value={name}
                          required
                          class={`before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-black/60 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-black/60 checked:before:bg-black/60 hover:before:opacity-10 hover:before:border-primary`}
                        />
                        <span class="absolute text-white transition-opacity opacity-0 pointer-events-none p-2 peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <span
                          class="ml-2 font-light text-slate-400 cursor-pointer"
                        >
                          {label}
                        </span>
                      </label>
                    </div>
                  ))
                } */}
              </div>
            </label>
            <footer class="flex justify-between">
              <button class="prev" onClick={() => setStep(STEPS[0].title)}>Volver</button>
              <button class="next">Enviar</button>
            </footer>
          </div>
        )
      }
    </form>
  );
}
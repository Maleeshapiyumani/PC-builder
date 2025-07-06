import { PCComponent } from "../context/PCBuilderContext";
export const mockComponents: PCComponent[] = [
// CPUs
{
  id: "cpu-1",
  type: "cpu",
  name: "Ryzen 7 5800X",
  brand: "AMD",
  price: 349.99,
  image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  specs: {
    cores: 8,
    threads: 16,
    baseClock: "3.8 GHz",
    boostClock: "4.7 GHz",
    tdp: 105,
    socket: "AM4"
  },
  compatible: {
    motherboard: ["mb-1", "mb-2"],
    cpu: [],
    gpu: [],
    ram: [],
    storage: [],
    psu: [],
    case: [],
    cooling: []
  }
}, {
  id: "cpu-2",
  type: "cpu",
  name: "Core i9-12900K",
  brand: "Intel",
  price: 589.99,
  image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  specs: {
    cores: 16,
    threads: 24,
    baseClock: "3.2 GHz",
    boostClock: "5.2 GHz",
    tdp: 125,
    socket: "LGA1700"
  },
  compatible: {
    motherboard: ["mb-3", "mb-4"],
    cpu: [],
    gpu: [],
    ram: [],
    storage: [],
    psu: [],
    case: [],
    cooling: []
  }
},
// Motherboards
{
  id: "mb-1",
  type: "motherboard",
  name: "ROG Strix B550-F Gaming",
  brand: "ASUS",
  price: 189.99,
  image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  specs: {
    socket: "AM4",
    chipset: "B550",
    memorySlots: 4,
    maxMemory: "128GB",
    pcieSlots: 3
  },
  compatible: {
    cpu: ["cpu-1"],
    motherboard: [],
    gpu: [],
    ram: [],
    storage: [],
    psu: [],
    case: [],
    cooling: []
  }
}, {
  id: "mb-3",
  type: "motherboard",
  name: "ROG Maximus Z690 Hero",
  brand: "ASUS",
  price: 599.99,
  image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  specs: {
    socket: "LGA1700",
    chipset: "Z690",
    memorySlots: 4,
    maxMemory: "128GB",
    pcieSlots: 4
  },
  compatible: {
    cpu: ["cpu-2"],
    motherboard: [],
    gpu: [],
    ram: [],
    storage: [],
    psu: [],
    case: [],
    cooling: []
  }
},
// GPUs
{
  id: "gpu-1",
  type: "gpu",
  name: "GeForce RTX 3080",
  brand: "NVIDIA",
  price: 699.99,
  image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  specs: {
    memory: "10GB GDDR6X",
    coreClock: "1.44 GHz",
    boostClock: "1.71 GHz",
    tdp: 320,
    ports: "HDMI 2.1, 3x DisplayPort 1.4a"
  }
}, {
  id: "gpu-2",
  type: "gpu",
  name: "Radeon RX 6800 XT",
  brand: "AMD",
  price: 649.99,
  image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  specs: {
    memory: "16GB GDDR6",
    coreClock: "1.8 GHz",
    boostClock: "2.25 GHz",
    tdp: 300,
    ports: "HDMI 2.1, 2x DisplayPort 1.4"
  }
},
// RAM
{
  id: "ram-1",
  type: "ram",
  name: "Trident Z RGB",
  brand: "G.Skill",
  price: 189.99,
  image: "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  specs: {
    capacity: "32GB (2x16GB)",
    speed: "3600MHz",
    type: "DDR4",
    cas: 16,
    voltage: "1.35V"
  }
},
// Storage
{
  id: "storage-1",
  type: "storage",
  name: "970 EVO Plus",
  brand: "Samsung",
  price: 149.99,
  image: "https://images.unsplash.com/photo-1597838816882-4435b1977fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  specs: {
    capacity: "1TB",
    type: "NVMe SSD",
    readSpeed: "3500 MB/s",
    writeSpeed: "3300 MB/s",
    form: "M.2 2280"
  }
},
// PSU
{
  id: "psu-1",
  type: "psu",
  name: "RM850x",
  brand: "Corsair",
  price: 129.99,
  image: "https://images.unsplash.com/photo-1595161397851-cb282529dbc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  specs: {
    wattage: 850,
    efficiency: "80+ Gold",
    modular: "Fully Modular",
    fanSize: "135mm"
  }
},
// Case
{
  id: "case-1",
  type: "case",
  name: "4000D Airflow",
  brand: "Corsair",
  price: 94.99,
  image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  specs: {
    type: "Mid Tower",
    motherboardSupport: "ATX, Micro-ATX, Mini-ITX",
    gpuLength: "360mm",
    dimensions: "453mm x 230mm x 466mm"
  }
},
// Cooling
{
  id: "cooling-1",
  type: "cooling",
  name: "Kraken X63",
  brand: "NZXT",
  price: 149.99,
  image: "https://images.unsplash.com/photo-1587202372682-d54a03d24861?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  specs: {
    type: "Liquid Cooling",
    radiatorSize: "280mm",
    fans: "2x 140mm",
    rgb: "true",
    noise: "21-36 dBA"
  }
}];
// Featured pre-built PCs
export const featuredBuilds = [{
  id: "build-1",
  name: "Gaming Beast",
  description: "High-end gaming PC with top-tier performance",
  price: 2499.99,
  image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  components: {
    cpu: "Ryzen 9 5950X",
    gpu: "RTX 3090",
    ram: "32GB DDR4 3600MHz",
    storage: "2TB NVMe SSD",
    motherboard: "X570 Gaming Pro Carbon",
    psu: "850W Gold",
    case: "Lian Li PC-O11 Dynamic",
    cooling: "360mm AIO Liquid Cooler"
  }
}, {
  id: "build-2",
  name: "Creator's Dream",
  description: "Optimized for content creation and productivity",
  price: 3299.99,
  image: "https://images.unsplash.com/photo-1593640408182-31c2bd3f3e0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  components: {
    cpu: "Intel i9-12900K",
    gpu: "RTX 3080 Ti",
    ram: "64GB DDR5 5200MHz",
    storage: "4TB NVMe SSD + 4TB HDD",
    motherboard: "Z690 Aorus Master",
    psu: "1000W Platinum",
    case: "Fractal Design Meshify 2",
    cooling: "Custom Water Cooling Loop"
  }
}, {
  id: "build-3",
  name: "Budget Gamer",
  description: "Affordable gaming PC with great 1080p performance",
  price: 999.99,
  image: "https://images.unsplash.com/photo-1587831991310-eb3e6a4a861d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  components: {
    cpu: "Ryzen 5 5600X",
    gpu: "RTX 3060",
    ram: "16GB DDR4 3200MHz",
    storage: "1TB NVMe SSD",
    motherboard: "B550 Gaming Plus",
    psu: "650W Bronze",
    case: "NZXT H510",
    cooling: "Stock CPU Cooler + 2 Case Fans"
  }
}];
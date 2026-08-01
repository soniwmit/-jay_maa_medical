export interface MedicineItem {
  id: string;
  name: string;
  genericName?: string;
  brand: string;
  category: 'Prescription' | 'OTC' | 'Health Device' | 'Baby Care' | 'Supplements' | 'Surgical & First Aid' | 'Personal Care';
  mrp: number;
  discountPrice?: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  description?: string;
  dosageForm?: string;
  packSize?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  iconName: string;
  items: string[];
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
  date: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'products' | 'equipment' | 'exterior';
  imageUrl: string;
  altText: string;
  caption: string;
}

export interface OrderFormData {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  medicineName: string;
  quantity: string;
  hasPrescription: boolean;
  prescriptionFileName?: string;
  message: string;
  preferredDeliveryTime: string;
}

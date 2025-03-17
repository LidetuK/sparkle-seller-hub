
import { useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { DialogTitle } from '@/components/ui/dialog';

interface CartFormProps {
  product: {
    id: string;
    name: string;
    image: string;
  };
  onClose: () => void;
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
});

const CartForm = ({ product, onClose }: CartFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      quantity: 1,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "5c6dd5d4-6a89-44a2-bc94-42257b680786",
          subject: `New Order: ${product.name}`,
          from_name: "ONEX Gems Website",
          to_email: "johnesku22@gmail.com",
          product: product.name,
          ...values
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Order Submitted Successfully!",
          description: `Thank you for your order of ${values.quantity} ${product.name}(s). We will contact you shortly.`,
        });
        onClose();
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Order submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative max-h-[90vh] overflow-y-auto p-4 md:p-6">
      <DialogTitle className="sr-only">Order {product.name}</DialogTitle>
      
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-6 mt-10 md:mt-0">
        <div className="sm:w-1/3">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="sm:w-2/3">
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <p className="text-sm text-gem-charcoal/70 mb-4">
            This exquisite piece is available for immediate purchase. 
            Please fill out the form below to place your order.
          </p>
        </div>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="1"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shipping Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your shipping address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="pt-4 pb-2">
            <Button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 bg-gem-charcoal hover:bg-gem-black" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : (
                <>
                  Place Order
                  <Check className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CartForm;

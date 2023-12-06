"use client";

import { AlertModal } from "@/components/modals/alert-modal";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Detail } from "@prisma/client";
import axios from "axios";
import { Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(1),
  detailId: z.string().min(1),
  price: z.string().min(1),
  price1: z.string(),
  value1: z.string().min(1),
  value2: z.string(),
});

type DetailFormValues = z.infer<typeof formSchema>;

interface DetailFormProps {
  initialData: Detail | null;
}

export const DetailForm: React.FC<DetailFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? "Изменить детали" : "Создать детали";
  const description = initialData ? "Изменение деталей" : "Создание деталей";
  const toastMessage = initialData ? "Обновить детали" : "Создать детали";
  const action = initialData ? "Сохранить изменение" : "Создать детали";

  const form = useForm<DetailFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      detailId: "",
      price: "",
      price1: "",
      value1: "",
      value2: "",
    },
  });

  const onSubmit = async (data: DetailFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(
          `/api/${params.storeId}/colors/${params.detailId}`,
          data
        );
      } else {
        await axios.post(`/api/${params.storeId}/colors`, data);
      }

      router.refresh();
      router.push(`/admin/${params.storeId}/details`);
      toast.success("Категория обновлена");
    } catch (error) {
      toast.error("Что-то пошло не так...");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${params.storeId}/colors/${params.colorId}`);
      router.refresh();
      router.push(`/admin/${params.storeId}/details`);
      toast.success("Детали удален");
    } catch (error) {
      toast.error("Убедитесь что вы удалили все");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        loading={loading}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
      />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Название</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Напишите название"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="detailId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Id деталя</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Id" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Цена 1</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Цена 1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Цена 2</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Цена 2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="value1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Остаток 1</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Остаток 1"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="value2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Остаток 2</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Остаток 2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} type="submit" className="ml-auto">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};

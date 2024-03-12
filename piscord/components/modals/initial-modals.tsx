"use client";
import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
}from "@/components/ui/dialog";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {useState} from "react";

const schema = z.object({
    name: z.string().min(1, {
        message: "Server name is required!",
    }),
    imageUrl: z.string().min(1, {
        message: "Server image is required!",
    })
});


export const InitialModal = () => {
    const [isMount, setIsMounted] = useState(false);
    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            imageUrl: "",
        }
    });
    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (data: z.infer<typeof schema>) => {
        console.log(data);
    };

    return (
        <Dialog open={true}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold text-zinc-600">
                        Create your server
                    </DialogTitle>
                        <DialogDescription className="text-center text-indigo-500">
                            Naming your server and uploading an image for its avatar! Feel free to change later!
                        </DialogDescription>
                </DialogHeader>
                <Form{...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="space-y-8 px-6">
                            <div className = "flex items-center justify-center text-center">
                                TODO: Add image upload
                            </div>
                            <FormField control={form.control} name="name" render={({field}) => (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-zinc-600">
                                        Server name
                                    </FormLabel>
                                    <FormControl>
                                        <Input disabled={isLoading} {...field} className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black" placeholder="Enter server name here"{...field}/>
                                    </FormControl>
                                    <FormMessage></FormMessage>
                                </FormItem>
                            )}/>
                        </div>
                        <DialogFooter className="bg-gray-200 px-5 py-3">
                            <Button variant="primary" disabled={isLoading}>
                                Create
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
                </DialogContent>
        </Dialog>
    )
}
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createFormSchema } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CreateView() {
  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
  });
}

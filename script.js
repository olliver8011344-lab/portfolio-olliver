import { supabase } from "./supabase.js";

async function testarSupabase() {

    const { data, error } = await supabase
        .from("projetos")
        .select("*");

    if (error) {
        console.error("Erro ao conectar com o Supabase:", error);
        return;
    }

    console.log("Conexão com Supabase funcionando!");
    console.log("Projetos:", data);
}

testarSupabase();
/**
 * Arquivo Técnico Editorial: biblioteca privada para material verificável do portfólio.
 * A área usa o DashboardLayout existente e só disponibiliza operações para o proprietário autenticado.
 */

import { ChangeEvent, useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import DashboardLayout from "@/components/DashboardLayout";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Copy, ExternalLink, FileText, FolderUp, Image as ImageIcon, LoaderCircle, LockKeyhole, Trash2, UploadCloud } from "lucide-react";

type Category = "curriculo" | "screenshot" | "projeto" | "outro";

const categoryLabels: Record<Category, string> = {
  curriculo: "Currículo",
  screenshot: "Screenshot",
  projeto: "Projeto",
  outro: "Outro",
};

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("pt-PT", { day: "2-digit", month: "short", year: "numeric" });
}

export default function FileLibrary() {
  const [, setLocation] = useLocation();
  const { user, loading } = useAuth();
  const utils = trpc.useUtils();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [category, setCategory] = useState<Category>("outro");

  const filesQuery = trpc.fileLibrary.list.useQuery(undefined, { enabled: Boolean(user?.role === "admin") });
  const upload = trpc.fileLibrary.upload.useMutation({
    onSuccess: async () => {
      setSelectedFile(null);
      await utils.fileLibrary.list.invalidate();
      toast.success("Ficheiro guardado na biblioteca.");
    },
    onError: (error) => toast.error(error.message),
  });
  const remove = trpc.fileLibrary.remove.useMutation({
    onSuccess: async () => {
      await utils.fileLibrary.list.invalidate();
      toast.success("Referência do ficheiro removida da biblioteca.");
    },
    onError: (error) => toast.error(error.message),
  });

  function selectFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    if (file && file.size > 7 * 1024 * 1024) {
      toast.error("Escolha um ficheiro de até 7 MB.");
      event.target.value = "";
      return;
    }
    setSelectedFile(file);
  }

  function uploadSelectedFile() {
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result ?? "");
      const contentBase64 = result.includes(",") ? result.split(",")[1] : "";
      if (!contentBase64) {
        toast.error("Não foi possível preparar o ficheiro para envio.");
        return;
      }
      upload.mutate({
        fileName: selectedFile.name,
        mimeType: selectedFile.type || "application/octet-stream",
        contentBase64,
        category,
      });
    };
    reader.onerror = () => toast.error("Não foi possível ler o ficheiro selecionado.");
    reader.readAsDataURL(selectedFile);
  }

  async function copyUrl(url: string) {
    await navigator.clipboard.writeText(`${window.location.origin}${url}`);
    toast.success("URL copiado.");
  }

  if (loading) return <div className="min-h-screen bg-[#f5f3ee]" />;

  return (
    <DashboardLayout>
      {user?.role !== "admin" ? (
        <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center gap-4 text-center">
          <LockKeyhole className="h-8 w-8 text-[#146cff]" aria-hidden="true" />
          <p className="font-mono text-xs tracking-[0.16em] text-[#146cff]">ÁREA RESTRITA</p>
          <h1 className="font-display text-4xl tracking-[-0.06em] text-[#12202b]">Biblioteca reservada ao proprietário.</h1>
          <p className="text-sm leading-6 text-[#53616b]">A autenticação está ativa, mas esta conta não possui permissão para gerir os recursos do portfólio.</p>
          <button onClick={() => setLocation("/")} className="border border-[#12202b] px-4 py-2 font-mono text-xs text-[#12202b]">VOLTAR AO PORTFÓLIO</button>
        </section>
      ) : (
        <section className="mx-auto max-w-6xl space-y-8 px-1 py-3 sm:px-5 sm:py-7">
          <header className="flex flex-col gap-4 border-b border-[#d7d6d0] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="font-mono text-[11px] tracking-[0.16em] text-[#146cff]">BIBLIOTECA PRIVADA · PORTFÓLIO</p><h1 className="mt-2 font-display text-4xl tracking-[-0.06em] text-[#12202b] sm:text-5xl">Ficheiros e evidências.</h1><p className="mt-3 max-w-xl text-sm leading-6 text-[#53616b]">Guarde currículo, screenshots e anexos de projeto. Os bytes ficam no armazenamento seguro; a base de dados guarda apenas as referências.</p></div>
            <button onClick={() => setLocation("/")} className="inline-flex items-center gap-2 border border-[#12202b] px-4 py-2 font-mono text-xs text-[#12202b]">VER PORTFÓLIO <ExternalLink className="h-3.5 w-3.5" /></button>
          </header>

          <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
            <aside className="border border-[#d7d6d0] bg-[#fbfaf7] p-5 sm:p-6">
              <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center bg-[#12202b] text-white"><FolderUp className="h-5 w-5" /></span><div><p className="font-mono text-[10px] tracking-[0.12em] text-[#146cff]">NOVO RECURSO</p><h2 className="font-display text-2xl tracking-[-0.04em]">Carregar ficheiro</h2></div></div>
              <label className="mt-6 flex min-h-32 cursor-pointer flex-col items-center justify-center border border-dashed border-[#9cb2c2] bg-[#f5f3ee] p-4 text-center transition hover:border-[#146cff] hover:bg-[#edf4ff]">
                <UploadCloud className="h-6 w-6 text-[#146cff]" aria-hidden="true" />
                <span className="mt-2 font-mono text-[11px] text-[#12202b]">{selectedFile ? selectedFile.name : "SELECIONAR FICHEIRO"}</span>
                <small className="mt-1 text-xs text-[#69757d]">Imagem, PDF, Word ou TXT · até 7 MB</small>
                <input className="sr-only" type="file" accept="image/*,.pdf,.doc,.docx,.txt" onChange={selectFile} />
              </label>
              {selectedFile ? <p className="mt-3 font-mono text-[11px] text-[#53616b]">{formatBytes(selectedFile.size)} · {selectedFile.type || "tipo não identificado"}</p> : null}
              <label className="mt-5 block font-mono text-[10px] tracking-[0.1em] text-[#53616b]">CATEGORIA<select value={category} onChange={(event) => setCategory(event.target.value as Category)} className="mt-2 w-full border border-[#d7d6d0] bg-white px-3 py-2.5 font-sans text-sm text-[#12202b] outline-none focus:border-[#146cff]"><option value="curriculo">Currículo</option><option value="screenshot">Screenshot</option><option value="projeto">Projeto</option><option value="outro">Outro</option></select></label>
              <button disabled={!selectedFile || upload.isPending} onClick={uploadSelectedFile} className="mt-4 flex w-full items-center justify-center gap-2 bg-[#146cff] px-4 py-3 font-mono text-xs text-white transition hover:bg-[#0e54c9] disabled:cursor-not-allowed disabled:opacity-50">{upload.isPending ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <UploadCloud className="h-4 w-4" />}{upload.isPending ? "A GUARDAR" : "GUARDAR FICHEIRO"}</button>
              <p className="mt-4 border-t border-[#d7d6d0] pt-4 text-xs leading-5 text-[#69757d]">Ao remover um item, a referência deixa de estar disponível na biblioteca. Não serão expostos ficheiros a visitantes públicos.</p>
            </aside>

            <div className="border border-[#d7d6d0] bg-white">
              <div className="flex items-center justify-between border-b border-[#d7d6d0] px-5 py-4"><div><p className="font-mono text-[10px] tracking-[0.13em] text-[#146cff]">ARQUIVO DISPONÍVEL</p><h2 className="font-display text-2xl tracking-[-0.04em]">Biblioteca</h2></div><span className="font-mono text-xs text-[#53616b]">{filesQuery.data?.length ?? 0} ITENS</span></div>
              {filesQuery.isLoading ? <div className="flex min-h-72 items-center justify-center"><LoaderCircle className="h-6 w-6 animate-spin text-[#146cff]" /></div> : null}
              {filesQuery.error ? <p className="p-5 text-sm text-red-600">{filesQuery.error.message}</p> : null}
              {!filesQuery.isLoading && !filesQuery.error && filesQuery.data?.length === 0 ? <div className="flex min-h-72 flex-col items-center justify-center px-5 text-center"><FileText className="h-7 w-7 text-[#9cb2c2]" /><p className="mt-3 font-display text-xl">A biblioteca está vazia.</p><p className="mt-1 text-sm text-[#69757d]">Carregue o primeiro currículo ou screenshot para começar.</p></div> : null}
              <ul className="divide-y divide-[#e7e3d9]">{filesQuery.data?.map((file) => <li key={file.id} className="flex gap-3 px-5 py-4"><span className="grid h-11 w-11 shrink-0 place-items-center border border-[#d7d6d0] bg-[#f5f3ee] text-[#146cff]">{file.mimeType.startsWith("image/") ? <ImageIcon className="h-5 w-5" /> : <FileText className="h-5 w-5" />}</span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-x-2 gap-y-1"><a href={file.url} target="_blank" rel="noreferrer" className="truncate font-medium text-[#12202b] hover:text-[#146cff]">{file.fileName}</a><span className="bg-[#dbe8ff] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-[#235b80]">{categoryLabels[file.category as Category]}</span></div><p className="mt-1 font-mono text-[10px] text-[#69757d]">{formatBytes(file.byteSize)} · {formatDate(file.createdAt)}</p></div><div className="flex shrink-0 items-start gap-1"><button onClick={() => copyUrl(file.url)} aria-label={`Copiar URL de ${file.fileName}`} className="p-2 text-[#53616b] hover:bg-[#edf4ff] hover:text-[#146cff]"><Copy className="h-4 w-4" /></button><button disabled={remove.isPending} onClick={() => { if (window.confirm(`Remover a referência de ${file.fileName}?`)) remove.mutate({ id: file.id }); }} aria-label={`Remover ${file.fileName}`} className="p-2 text-[#53616b] hover:bg-red-50 hover:text-red-600 disabled:opacity-50"><Trash2 className="h-4 w-4" /></button></div></li>)}</ul>
            </div>
          </div>
        </section>
      )}
    </DashboardLayout>
  );
}

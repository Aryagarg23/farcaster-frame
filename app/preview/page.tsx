import FramePreview from '@/components/frame-preview';

export default function PreviewPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <h1 className="text-3xl font-bold mb-8">Farcaster Frame Preview</h1>
      <p className="text-muted-foreground mb-8 max-w-md text-center">
        This is a preview of how your Farcaster Frame will look and behave. 
        You can test the flow before sharing it.
      </p>
      <FramePreview />
    </div>
  );
}
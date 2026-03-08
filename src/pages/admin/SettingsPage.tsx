import AdminPageHeader from "@/components/admin/AdminPageHeader";

const SettingsPage = () => {
  return (
    <div>
      <AdminPageHeader title="Settings" description="Configure API endpoints and general settings." />

      <div className="space-y-6">
        {/* API Config */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <h3 className="text-sm font-medium text-foreground">API Configuration</h3>
          <p className="text-xs text-muted-foreground">
            Configure your backend API base URL here. Once connected, all content changes will be persisted via your API.
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-muted/50">
              <div>
                <p className="text-sm text-foreground">API Base URL</p>
                <p className="text-xs text-muted-foreground font-mono">Not configured</p>
              </div>
              <span className="text-xs font-mono text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded-full">Pending</span>
            </div>
            <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-muted/50">
              <div>
                <p className="text-sm text-foreground">Authentication Token</p>
                <p className="text-xs text-muted-foreground font-mono">Not configured</p>
              </div>
              <span className="text-xs font-mono text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded-full">Pending</span>
            </div>
          </div>
        </div>

        {/* Integration Guide */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <h3 className="text-sm font-medium text-foreground">Integration Guide</h3>
          <div className="space-y-3 text-xs text-muted-foreground font-mono">
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <p className="text-primary">// 1. Create async thunks in each slice:</p>
              <p>{`export const fetchHero = createAsyncThunk(`}</p>
              <p>{`  'hero/fetch', async () => {`}</p>
              <p>{`    const res = await fetch(API_URL + '/hero');`}</p>
              <p>{`    return res.json();`}</p>
              <p>{`  }`}</p>
              <p>{`);`}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <p className="text-primary">// 2. Add extraReducers to handle loading states:</p>
              <p>{`extraReducers: (builder) => {`}</p>
              <p>{`  builder`}</p>
              <p>{`    .addCase(fetchHero.pending, (state) => { state.loading = true; })`}</p>
              <p>{`    .addCase(fetchHero.fulfilled, (state, action) => {`}</p>
              <p>{`      state.loading = false;`}</p>
              <p>{`      return { ...state, ...action.payload };`}</p>
              <p>{`    });`}</p>
              <p>{`}`}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <p className="text-primary">// 3. Dispatch save actions in editors:</p>
              <p>{`const handleSave = async () => {`}</p>
              <p>{`  await dispatch(saveHero(form)).unwrap();`}</p>
              <p>{`  toast.success("Saved to server!");`}</p>
              <p>{`};`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

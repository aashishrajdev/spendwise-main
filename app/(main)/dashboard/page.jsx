import { Reveal } from "@/components/motion/Reveal";
import { getUserAccounts, getDashboardData } from "@/actions/dashboard";
import { getCurrentBudget } from "@/actions/budget";
import { AccountCard } from "./_components/account-card";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { BudgetProgress } from "./_components/budget-progress";
import { DashboardOverview } from "./_components/transaction-overview";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";


export default async function DashboardPage() {
  const [accounts, transactions] = await Promise.all([
    getUserAccounts(),
    getDashboardData(),
  ]);

  const defaultAccount = accounts?.find((account) => account.isDefault);

  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  const totalBalance =
    accounts?.reduce((sum, acc) => sum + acc.balance, 0) || 0;

  return (
    <div className="space-y-10">
      {/* === STATS ROW === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Balance" value={`₹${totalBalance}`} />
        <StatCard
          title="This Month"
          value={`₹${budgetData?.currentExpenses || 0}`}
        />
        <StatCard
          title="Accounts"
          value={accounts?.length || 0}
        />
      </div>

      {/* === BUDGET === */}
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/10" />
        <CardContent className="relative p-6">
          <Reveal>
          <BudgetProgress
            initialBudget={budgetData?.budget}
            currentExpenses={budgetData?.currentExpenses || 0}
          />
            </Reveal>
        </CardContent>
      </Card>

      {/* === TRANSACTIONS / OVERVIEW === */}
      <Reveal delay={0.1}>
  <DashboardOverview
    accounts={accounts}
    transactions={transactions || []}
  />
</Reveal>


      {/* === ACCOUNTS === */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Accounts</h2>
        <Reveal delay={0.2}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          <CreateAccountDrawer>
            <button className="group">
              <Card className="border-2 border-dashed hover:border-primary hover:bg-primary/5 transition">
                <CardContent className="flex flex-col items-center justify-center h-full py-10 text-muted-foreground">
                  <Plus className="h-10 w-10 mb-2 group-hover:scale-110 transition" />
                  <p className="text-sm font-medium">Add New Account</p>
                  <p className="text-xs mt-1">
                    Track a new bank or wallet
                  </p>
                </CardContent>
              </Card>
            </button>
          </CreateAccountDrawer>

          {accounts.length > 0 ? (
            accounts.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))
          ) : (
            <EmptyState />
          )}
        </div>
        </Reveal>
      </div>
    </div>
  );
}



function StatCard({ title, value }) {
  return (
    <Card className="hover:shadow-md transition">
      <CardContent className="p-5">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </CardContent>
    </Card>
  );
}

function EmptyState() {
  return (
    <Card className="col-span-full">
      <CardContent className="py-10 text-center text-muted-foreground">
        <p className="font-medium">No accounts yet</p>
        <p className="text-sm mt-1">
          Add your first account to get started
        </p>
      </CardContent>
    </Card>
  );
}

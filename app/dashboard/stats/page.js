/**
 * صفحة الإحصائيات الرئيسية
 * تستخدم مكون عميل منفصل لتجنب مشاكل React Server Components
 */

import StatsClient from './stats-client'

export default function StatsPage() {
  return <StatsClient />;
}

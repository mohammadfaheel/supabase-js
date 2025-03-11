import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project-id.supabase.co';  // استبدل بهذا الرابط
const supabaseKey = 'your-public-api-key';  // استبدل بهذا المفتاح

export const supabase = createClient(supabaseUrl, supabaseKey);

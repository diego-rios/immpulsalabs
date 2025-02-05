export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type BrowserInfo = {
  userAgent: string
  language: string
  platform: string
  vendor: string
  screenResolution?: string
}

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          country_code: string
          source: string
          page_url: string | null
          utm_source: string | null
          utm_medium: string | null
          utm_campaign: string | null
          utm_term: string | null
          utm_content: string | null
          browser_info: BrowserInfo | null
          ip_address: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          phone: string
          country_code: string
          source?: string
          page_url?: string | null
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
          utm_term?: string | null
          utm_content?: string | null
          browser_info?: BrowserInfo | null
          ip_address?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string
          country_code?: string
          source?: string
          page_url?: string | null
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
          utm_term?: string | null
          utm_content?: string | null
          browser_info?: BrowserInfo | null
          ip_address?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Functions: {
      check_duplicate_lead: {
        Args: {
          p_email: string
          p_phone: string
          p_timeframe_minutes?: number
        }
        Returns: boolean
      }
    }
  }
} 
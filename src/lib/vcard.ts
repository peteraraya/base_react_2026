import { Contact } from '@/types/cv';

export function generateVCard(name: string, role: string, contact: Contact) {
  // RFC 2426 vCard formatting
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TITLE:${role}
TEL;TYPE=WORK,VOICE:${contact.phone}
EMAIL;TYPE=WORK,INTERNET:${contact.email}
URL:${contact.linkedin}
URL:${contact.github}
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${name.replace(/\s+/g, '_')}_Contact.vcf`;
  document.body.appendChild(link);
  link.click();
  
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

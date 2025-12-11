import { useState } from "react";
import { Header } from "@/components/email/Header";
import { Sidebar } from "@/components/email/Sidebar";
import { EmailList, type Email } from "@/components/email/EmailList";
import { EmailViewer } from "@/components/email/EmailViewer";
import { ComposeModal } from "@/components/email/ComposeModal";
import { Footer } from "@/components/layout/Footer";

// Sample email data
const sampleEmails: Email[] = [
  {
    id: "1",
    from: "Academic Registry",
    fromEmail: "registry@aru.ac.tz",
    subject: "Important: Semester Registration Deadline",
    preview: "Dear Student, This is to remind you that the deadline for semester registration is approaching...",
    date: new Date(2024, 11, 10),
    isRead: false,
    isStarred: true,
    hasAttachment: true,
    label: "important",
  },
  {
    id: "2",
    from: "Dr. Sarah Mwanza",
    fromEmail: "s.mwanza@aru.ac.tz",
    subject: "RE: Research Proposal Feedback",
    preview: "I have reviewed your research proposal and would like to schedule a meeting to discuss...",
    date: new Date(2024, 11, 9),
    isRead: false,
    isStarred: false,
    hasAttachment: true,
    label: "academic",
  },
  {
    id: "3",
    from: "ARUSO",
    fromEmail: "aruso@students.aru.ac.tz",
    subject: "Annual Sports Day - Registration Open",
    preview: "We are excited to announce that registration for the Annual Sports Day is now open...",
    date: new Date(2024, 11, 8),
    isRead: true,
    isStarred: false,
    hasAttachment: false,
    label: "announcements",
  },
  {
    id: "4",
    from: "Library Services",
    fromEmail: "library@aru.ac.tz",
    subject: "Book Return Reminder",
    preview: "This is a friendly reminder that you have library materials due for return...",
    date: new Date(2024, 11, 7),
    isRead: true,
    isStarred: false,
    hasAttachment: false,
  },
  {
    id: "5",
    from: "IT Department",
    fromEmail: "it.support@aru.ac.tz",
    subject: "System Maintenance Notice",
    preview: "Please be informed that the university systems will undergo scheduled maintenance...",
    date: new Date(2024, 11, 6),
    isRead: true,
    isStarred: true,
    hasAttachment: false,
    label: "announcements",
  },
  {
    id: "6",
    from: "Finance Office",
    fromEmail: "finance@aru.ac.tz",
    subject: "Fee Statement - December 2024",
    preview: "Your fee statement for the current semester is now available. Please review...",
    date: new Date(2024, 11, 5),
    isRead: true,
    isStarred: false,
    hasAttachment: true,
    label: "important",
  },
  {
    id: "7",
    from: "Prof. John Kimaro",
    fromEmail: "j.kimaro@aru.ac.tz",
    subject: "Lecture Rescheduled - Urban Planning 301",
    preview: "Due to unforeseen circumstances, the lecture scheduled for Friday has been moved...",
    date: new Date(2024, 11, 4),
    isRead: true,
    isStarred: false,
    hasAttachment: false,
    label: "academic",
  },
  {
    id: "8",
    from: "Dean of Students",
    fromEmail: "dean.students@aru.ac.tz",
    subject: "End of Year Message",
    preview: "As we approach the end of the academic year, I want to take this opportunity to...",
    date: new Date(2024, 11, 3),
    isRead: true,
    isStarred: false,
    hasAttachment: false,
  },
];

export default function Dashboard() {
  const [activeFolder, setActiveFolder] = useState("inbox");
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(null);
  const [emails, setEmails] = useState(sampleEmails);
  const [showCompose, setShowCompose] = useState(false);

  const selectedEmail = emails.find((e) => e.id === selectedEmailId) || null;

  const handleStarEmail = (id: string) => {
    setEmails(emails.map((e) => 
      e.id === id ? { ...e, isStarred: !e.isStarred } : e
    ));
  };

  const handleDeleteEmail = (id: string) => {
    setEmails(emails.filter((e) => e.id !== id));
    setSelectedEmailId(null);
  };

  const filteredEmails = activeFolder === "starred" 
    ? emails.filter((e) => e.isStarred)
    : emails;

  return (
    <div className="flex h-screen flex-col bg-background">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          activeFolder={activeFolder}
          onFolderChange={setActiveFolder}
          onCompose={() => setShowCompose(true)}
        />
        
        <div className="flex flex-1 overflow-hidden">
          {/* Email List */}
          <div className="w-full max-w-md border-r border-border bg-card/50 md:w-96">
            <div className="flex h-14 items-center justify-between border-b border-border px-4">
              <h2 className="font-semibold capitalize text-foreground">{activeFolder}</h2>
              <span className="text-sm text-muted-foreground">
                {filteredEmails.length} messages
              </span>
            </div>
            <EmailList
              emails={filteredEmails}
              selectedId={selectedEmailId}
              onSelect={setSelectedEmailId}
              onStar={handleStarEmail}
            />
          </div>

          {/* Email Viewer */}
          <EmailViewer
            email={selectedEmail}
            onClose={() => setSelectedEmailId(null)}
            onStar={handleStarEmail}
            onDelete={handleDeleteEmail}
            onReply={() => setShowCompose(true)}
          />
        </div>
      </div>

      <Footer />

      {/* Compose Modal */}
      <ComposeModal
        isOpen={showCompose}
        onClose={() => setShowCompose(false)}
      />
    </div>
  );
}

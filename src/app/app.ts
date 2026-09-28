import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';

interface Showcase {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  summary: string;
  role: string;
  scope: string;
  technologies: string[];
  why: string;
  delivered: string[];
  impact: string[];
  projects: string;
  translation: string;
  architecture: string;
  screens?: { src: string; alt: string }[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  private readonly document = inject(DOCUMENT);
  protected readonly menuOpen = signal(false);
  protected readonly selectedImage = signal<{ src: string; alt: string } | null>(null);
  protected readonly year = new Date().getFullYear();

  protected readonly capabilities = [
    { title: 'Modern Backend', text: 'Java, Spring Boot, REST APIs, Kafka, Redis, SQL and NoSQL, and secure batch processing.' },
    { title: 'Enterprise Integration', text: 'Workflow, enterprise content management, banking and partner services, cloud storage, and file integration.' },
    { title: 'System Analysis', text: 'Requirements, process flows, service boundaries, error behavior, and technical decisions.' },
    { title: 'Security and Governance', text: 'Trusted identity, authorization, permissions, encryption, audit, and controlled data handling.' },
    { title: 'Operations', text: 'Job control, metrics, reporting, troubleshooting, runbooks, and production readiness.' },
    { title: 'Technical Leadership', text: 'Design discussions, code review, task decomposition, and cross-team coordination.' }
  ];

  protected readonly showcases: Showcase[] = [
    {
      id: 'content-storage', number: '01', eyebrow: 'Enterprise content platforms', title: 'Content Storage and Lifecycle',
      summary: 'Made enterprise content storage configurable, movable, and ready for cloud or compressed storage without changing the user workflow.',
      role: 'System Analyst / Technical Lead / Java Developer', scope: 'Backend services, scheduled operations, and administration UI',
      technologies: ['Java', 'ContentStore API', 'Cloud Object Storage', 'Quartz', 'LZ4'],
      why: 'Give operations teams controlled ways to place, move, and retrieve repository content across different storage strategies.',
      delivered: ['Built configurable content-store selection and safe movement between managed storage locations.', 'Added manual and scheduled jobs with validation, status, cooperative stop, and auditable outcomes.', 'Implemented a cloud object-storage connector with stable content references and a managed local cache.', 'Implemented transparent LZ4 compression and decompression for selected repository content.'],
      impact: ['Turned storage changes into a repeatable operational process instead of a one-off migration script.', 'Kept document access consistent while physical storage strategies changed behind the repository boundary.', 'Created reusable storage patterns that translate to modern object-storage and lifecycle services.'],
      projects: '3 projects represented: Content Store Selector, Cloud Storage Connector, and Compressed Content Store.',
      translation: 'Pluggable object-storage adapters, scheduled workers, lifecycle policies, and transparent storage optimization.',
      architecture: 'assets/showcases/content-storage-architecture.png',
      screens: [{ src: 'assets/showcases/content-storage-operations.png', alt: 'Scheduled storage operations, destination selection, and compression rule configuration' }, { src: 'assets/showcases/content-storage-scheduling.png', alt: 'Reusable schedules and repository storage selection action' }]
    },
    {
      id: 'document-security', number: '02', eyebrow: 'Security and content governance', title: 'Document Security and Access Governance',
      summary: 'Protected documents and governed enterprise actions through backend enforcement supported by clear user-facing controls.',
      role: 'System Analyst / Technical Lead / Java Developer', scope: 'Authorization, document protection, and supporting repository UI',
      technologies: ['Java', 'Repository Security', 'Encryption', 'PDF and Office', 'JavaScript'],
      why: 'Apply document protection, upload policy, and role-based access consistently across repository services and the user interface.',
      delivered: ['Created repository-integrated encryption and decryption for PDF, Office, and other binary content.', 'Built configurable group-based controls for sites, repository areas, search, sharing, and downloads.', 'Added upload restrictions by extension, MIME type, size, and image dimensions.', 'Aligned menus, forms, and document actions with the policies enforced by backend services.'],
      impact: ['Reduced the gap between what the interface hides and what the backend actually permits.', 'Made protection and upload policies reusable across interactive actions and direct service requests.', 'Improved security without presenting users with actions they could not complete.'],
      projects: '3 projects represented: File Encryption, Access and Site Governance, and Advanced File Blocker.',
      translation: 'Authorization, policy enforcement, data protection, and backend validation supported by a role-aware UI.', architecture: 'assets/showcases/document-security-architecture.png'
    },
    {
      id: 'observability', number: '03', eyebrow: 'Operations and support', title: 'Audit and Operational Observability',
      summary: 'Converted repository activity into searchable evidence, measurable service behavior, and dashboard-ready operational views.',
      role: 'System Analyst / Java Platform Developer', scope: 'Audit capture, reporting, metrics, and dashboards',
      technologies: ['Java', 'Audit Services', 'Prometheus', 'Grafana', 'Reporting'],
      why: 'Help administrators investigate activity, identify failures, and understand service health without relying on manual log reading alone.',
      delivered: ['Extended audit capture for document activity and selected authority-management changes.', 'Built administrator search, lifecycle controls, and exportable audit reports.', 'Measured request volume, normalized routes, final status, and duration through filters and interceptors.', 'Exposed monitoring metrics and configurable links to operational dashboards.'],
      impact: ['Made support and compliance investigation faster by turning raw events into usable evidence.', 'Provided visibility into failures and slow paths through metrics designed for stable dashboards.', 'Connected technical telemetry with selected business-audit context while keeping both concerns maintainable.'],
      projects: '2 projects represented: Advanced Audit Trail and Operational Metrics and Observability.',
      translation: 'Centralized audit, structured events, Prometheus-style metrics, and operational dashboards.', architecture: 'assets/showcases/observability-architecture.png',
      screens: [{ src: 'assets/showcases/audit-investigation.png', alt: 'Repository audit investigation interface' }]
    },
    {
      id: 'document-operations', number: '04', eyebrow: 'Document productivity', title: 'Document Operations and Digital Capture',
      summary: 'Brought bulk administration, PDF processing, scanning, and OCR into governed repository workflows.',
      role: 'System Analyst / Java Repository Developer', scope: 'Document processing, capture services, and administration tools',
      technologies: ['Java', 'PDFBox', 'OCR Integration', 'TIFF', 'CSV and XLSX', 'Repository UI'],
      why: 'Reduce manual desktop work and make document outputs immediately available as managed content with permissions and metadata.',
      delivered: ['Implemented document-to-PDF conversion as a user action and automated repository rule.', 'Created PDF operations for merging, splitting, inserting, deleting, applying backgrounds, and protected downloads.', 'Built a scanning workspace that loads scanner pages or existing documents, supports OCR results, and saves managed content.', 'Implemented validated bulk import and export for users, groups, memberships, and folder permissions.'],
      impact: ['Reduced download-process-upload steps and kept new outputs inside repository governance.', 'Connected paper capture directly to content types, metadata, and controlled destinations.', 'Made high-volume administration repeatable and reviewable through result and current-state reports.'],
      projects: '4 projects represented: Authority and Permission Importer, Convert to PDF, PDF Toolkit, and Scan and OCR Workspace.',
      translation: 'Document-processing services, governed file pipelines, OCR integration, and validated bulk administration.', architecture: 'assets/showcases/document-operations-architecture.png',
      screens: [{ src: 'assets/showcases/document-processing-capture.png', alt: 'PDF operations and document scanning workspace' }, { src: 'assets/showcases/pdf-toolkit-actions.png', alt: 'Document menu with PDF toolkit actions' }, { src: 'assets/showcases/document-scan-workflow.png', alt: 'Repository folders and browser-based scanning workflow' }]
    },
    {
      id: 'ai-assistant', number: '05', eyebrow: 'AI and knowledge access', title: 'Permission-Aware AI Repository Assistant',
      summary: 'Connected authenticated repository users to an AI question-answering service while keeping source documents traceable and permission-aware.',
      role: 'Java / Enterprise Integration Developer', scope: 'AI service adapter, session context, and document links',
      technologies: ['Java', 'HTTP and JSON', 'AI Service Integration', 'Repository Metadata'],
      why: 'Help users find answers from enterprise content without moving repository identity and access decisions into the browser.',
      delivered: ['Built a server-side bridge for questions, session continuity, timeouts, and controlled downstream errors.', 'Forwarded authenticated user and authority context to support permission-aware retrieval behavior.', 'Formatted responses and resolved supported source references into repository document links.', 'Created a node-information service that returns permitted metadata and rejects unauthorized access.'],
      impact: ['Added AI-assisted discovery without exposing provider endpoints or integration details to the UI.', 'Kept answers connected to governed source documents where references were available.', 'Demonstrated how a modern AI capability can be added behind an established enterprise security boundary.'],
      projects: '1 project represented: AI-Assisted Repository Chat.', translation: 'Permission-aware AI and RAG gateway patterns with authenticated context, sessions, and traceable source references.', architecture: 'assets/showcases/ai-assistant-architecture.png',
      screens: [{ src: 'assets/showcases/ai-assistant-screen.png', alt: 'Permission-aware repository AI assistant' }]
    },
    {
      id: 'external-portal', number: '06', eyebrow: 'Partner experience and integration', title: 'External Portal and Workflow Access',
      summary: 'Delivered a dedicated portal for external users and connected it to selected internal workflow applications through a controlled server-side boundary.',
      role: 'System Analyst / Technical Lead / Integration Developer', scope: 'Portal accounts, signed workflow access, and supporting UI',
      technologies: ['PHP', 'CodeIgniter', 'Workflow Platform', 'REST', 'JavaScript', 'Bootstrap'],
      why: 'Let partners use approved processes without exposing workflow administration, integration credentials, or internal service locations.',
      delivered: ['Analyzed the external-user journey, account roles, and permitted workflow access.', 'Implemented account registration and status APIs plus authenticated portal-session behavior.', 'Built workflow application discovery, signed navigation context, and server-side integration helpers.', 'Delivered bilingual dashboards and embedded approved workflow views.'],
      impact: ['Created a clearer trust boundary between partner users and the internal workflow platform.', 'Allowed workflow applications to evolve while the portal maintained a consistent user experience.', 'Combined backend integration and focused frontend delivery in one end-to-end solution.'],
      projects: '1 project represented: Enterprise Portal and Workflow Integration.', translation: 'Partner portal and backend-for-frontend patterns with server-side service integration and signed access context.', architecture: 'assets/showcases/external-portal-architecture.png',
      screens: [{ src: 'assets/showcases/external-portal-screen.png', alt: 'External user administration and partner workflow dashboard' }]
    },
    {
      id: 'onboarding', number: '07', eyebrow: 'Financial services', title: 'Digital Onboarding and Customer Consent',
      summary: 'Designed and delivered backend journeys that coordinate onboarding, trusted identity, consent content, and dependent enterprise services.',
      role: 'Senior Analyst / Backend Engineer / Technical Lead', scope: 'System analysis, service orchestration, and delivery leadership',
      technologies: ['Java', 'Spring Boot', 'REST', 'JWT', 'Redis', 'Kafka', 'WebClient'],
      why: 'Provide secure, traceable onboarding operations across channel APIs and multiple backend systems while keeping the channel contract consistent.',
      delivered: ['Translated business requirements into service flows, integration boundaries, and implementation plans.', 'Implemented registration, update, cancellation, and confirmation orchestration across dependent services.', 'Built secure consent inquiry with token context, external-content adapters, and Redis cache-aside behavior.', 'Led design discussions, code review, troubleshooting, release preparation, and cross-team coordination.'],
      impact: ['Turned cross-system onboarding requirements into maintainable backend responsibilities and predictable API outcomes.', 'Reduced repeated external consent calls while keeping a stable client-facing contract.', 'Improved traceability and production readiness through audit events, error mapping, and delivery controls.'],
      projects: '4 projects represented: Digital Onboarding Platform, Benefits Onboarding Service, Customer Consent Service, and Onboarding Confirmation.', translation: 'Secure microservice orchestration, API contracts, cache-aside integration, events, and trusted identity context.', architecture: 'assets/showcases/onboarding-architecture.png'
    },
    {
      id: 'reconciliation', number: '08', eyebrow: 'Financial operations', title: 'Reconciliation and Settlement Processing',
      summary: 'Built controlled batch pipelines for secure file preparation, high-volume processing, mismatch classification, and operational reporting.',
      role: 'Backend / Batch Engineer', scope: 'Batch APIs, secure files, data comparison, and persistence',
      technologies: ['Java', 'Spring Boot', 'Async', 'SFTP', 'MongoDB', 'SQL', 'Redis', 'Kafka'],
      why: 'Turn dated operational files into validated, reportable outcomes while controlling memory, concurrency, and rerun behavior.',
      delivered: ['Implemented asynchronous start and status control with explicit processing outcomes.', 'Built secure file download, control-file validation, and configurable preprocessing.', 'Created reconciliation logic for missing, different, and extra transactions with repair events.', 'Implemented concurrent settlement mapping and bounded chunk persistence for high-volume files.'],
      impact: ['Separated operational control from long-running work so batch state remained visible.', 'Reduced memory pressure by streaming input and persisting bounded chunks.', 'Made mismatches and failures actionable through classification, events, and report data.'],
      projects: '2 projects represented: Transaction Reconciliation Batch and Settlement File Processing Batch.', translation: 'Observable data-pipeline and batch-processing patterns using streaming input, bounded concurrency, and chunked persistence.', architecture: 'assets/showcases/reconciliation-architecture.png'
    },
    {
      id: 'modernization', number: '09', eyebrow: 'System analysis and product enhancement', title: 'Enterprise Modernization and Delivery Leadership',
      summary: 'Connected requirements, architecture, implementation, and production support across integrations and business-system enhancements.',
      role: 'System Analyst / Technical Lead / Java Developer', scope: 'Requirements, backend changes, integration, and release support',
      technologies: ['Java', 'Spring Boot', 'REST and SOAP', 'Oracle SQL', 'JavaScript', 'DevOps'],
      why: 'Deliver practical improvements to existing enterprise systems while maintaining operational continuity and cross-team alignment.',
      delivered: ['Converted business requirements into application flows, service designs, and actionable development work.', 'Implemented backend, database, and targeted UI enhancements across product, sales, and personnel functions.', 'Delivered enterprise integrations with consistent contracts, mapping, error handling, and quality controls.', 'Coordinated developers, analysts, QA, infrastructure, and release stakeholders through production readiness.'],
      impact: ['Reduced ambiguity between business expectations and implementation responsibilities.', 'Introduced improvements without requiring disruptive replacement of operational systems.', 'Demonstrated ownership from analysis and technical design through delivery and support.'],
      projects: '3 projects represented: Enterprise Integration Delivery, Product Management System, and Sales and Personnel Management Enhancements.', translation: 'End-to-end technical ownership across requirements, architecture, implementation governance, release readiness, and production support.', architecture: 'assets/showcases/modernization-architecture.png'
    }
  ];

  protected toggleMenu(): void { this.menuOpen.update(open => !open); }
  protected closeMenu(): void { this.menuOpen.set(false); }
  protected openImage(src: string, alt: string): void { this.selectedImage.set({ src, alt }); this.document.body.classList.add('modal-open'); }
  protected closeImage(): void { this.selectedImage.set(null); this.document.body.classList.remove('modal-open'); }

  @HostListener('document:keydown.escape')
  protected onEscape(): void { if (this.selectedImage()) this.closeImage(); }
}

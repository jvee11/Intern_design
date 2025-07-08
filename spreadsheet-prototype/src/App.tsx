import React from 'react';
import './App.css';

// Placeholder data and functions
const Headers = [
  '', // For row number column
  'Job Request',
  'Submitted',
  'Status',
  'Submitter',
  'URL',
  'Assigned',
  'Priority',
  'Due Date',
  'Est. Value',
  'Notes',
];

const tasks = [
  {
    id: 1,
    taskName: 'Task 1',
    startDate: '2025-01-01',
    status: 'Open',
    assignedTo: 'John Doe',
    portfolio: 'https://example.com',
    lead: 'Jane Smith',
    priority: 'High',
    endDate: '2025-02-01',
    budget: '$5000',
    notes: 'Urgent task',
  },
  {
    id: 2,
    taskName: 'Task 2',
    startDate: '2025-01-15',
    status: 'In Progress',
    assignedTo: 'Alice Brown',
    portfolio: 'https://example.com',
    lead: 'Bob Johnson',
    priority: 'Medium',
    endDate: '2025-03-01',
    budget: '$3000',
    notes: 'Needs review',
  },
  {
    id: 3,
    taskName: 'Task 3',
    startDate: '2025-02-01',
    status: 'Closed',
    assignedTo: 'Charlie Davis',
    portfolio: 'https://example.com',
    lead: 'Emma Wilson',
    priority: 'Low',
    endDate: '2025-04-01',
    budget: '$2000',
    notes: 'Completed',
  },
];

const getStatusStyles = (status: String) => {
  switch (status) {
    case 'Open':
      return 'bg-blue-100 text-blue-800';
    case 'In Progress':
      return 'bg-yellow-100 text-yellow-800';
    case 'Closed':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const getPriorityStyles = (priority: String) => {
  switch (priority) {
    case 'High':
      return 'text-red-600';
    case 'Medium':
      return 'text-yellow-600';
    case 'Low':
      return 'text-green-600';
    default:
      return 'text-gray-600';
  }
};

const Spreadsheet = () => {
  return (
    <div id="app">
      <main
        className="flex w-full items-start relative bg-white"
        style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
      >
        <div
          className="flex flex-col w-full items-start relative bg-slate-50"
          style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
        >
          {/* Header */}
          <header className="flex items-center justify-between px-4 py-2 relative self-stretch w-full flex-[0_0_auto] z-[3] bg-white border-b border-solid border-[#eeeeee]">
            <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground p-0 h-6 w-6">
                <img
                  className="w-6 h-6"
                  alt="Panel"
                  src="https://c.animaapp.com/mclmkdkf288FZk/img/panel.svg"
                />
              </button>
              <nav aria-label="breadcrumb">
                <ol className="flex-wrap break-words text-sm text-muted-foreground sm:gap-2.5 inline-flex items-center gap-1">
                  <li className="inline-flex items-center gap-1.5">
                    <a
                      className="transition-colors inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] hover:text-[#121212]"
                      href="#"
                    >
                      <span className="relative w-fit mt-[-1.00px] font-paragraph-14-s-medium-14-20 font-[number:var(--paragraph-14-s-medium-14-20-font-weight)] text-[#afafaf] text-[length:var(--paragraph-14-s-medium-14-20-font-size)] tracking-[var(--paragraph-14-s-medium-14-20-letter-spacing)] leading-[var(--paragraph-14-s-medium-14-20-line-height)] whitespace-nowrap [font-style:var(--paragraph-14-s-medium-14-20-font-style)]">
                        Workspace
                      </span>
                    </a>
                  </li>
                  <li
                    role="presentation"
                    aria-hidden="true"
                    className="[&>svg]:w-3.5 [&>svg]:h-3.5"
                  >
                    <img
                      className="w-3 h-3"
                      alt="Chevron"
                      src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron-1.svg"
                    />
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <a
                      className="transition-colors inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] hover:text-[#121212]"
                      href="#"
                    >
                      <span className="relative w-fit mt-[-1.00px] font-paragraph-14-s-medium-14-20 font-[number:var(--paragraph-14-s-medium-14-20-font-weight)] text-[#afafaf] text-[length:var(--paragraph-14-s-medium-14-20-font-size)] tracking-[var(--paragraph-14-s-medium-14-20-letter-spacing)] leading-[var(--paragraph-14-s-medium-14-20-line-height)] whitespace-nowrap [font-style:var(--paragraph-14-s-medium-14-20-font-style)]">
                        Folder 2
                      </span>
                    </a>
                  </li>
                  <li
                    role="presentation"
                    aria-hidden="true"
                    className="[&>svg]:w-3.5 [&>svg]:h-3.5"
                  >
                    <img
                      className="w-3 h-3"
                      alt="Chevron"
                      src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron-1.svg"
                    />
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <a
                      className="transition-colors hover:text-foreground inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]"
                      href="#"
                    >
                      <span className="relative w-fit mt-[-1.00px] font-paragraph-14-s-medium-14-20 font-[number:var(--paragraph-14-s-medium-14-20-font-weight)] text-[#121212] text-[length:var(--paragraph-14-s-medium-14-20-font-size)] tracking-[var(--paragraph-14-s-medium-14-20-letter-spacing)] leading-[var(--paragraph-14-s-medium-14-20-line-height)] whitespace-nowrap [font-style:var(--paragraph-14-s-medium-14-20-font-style)]">
                        Spreadsheet 3
                      </span>
                      <button className="whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground w-6 h-6 p-0 justify-center gap-2 rounded flex items-center">
                        <img
                          className="w-5 h-5"
                          alt="More"
                          src="https://c.animaapp.com/mclmkdkf288FZk/img/more.svg"
                        />
                      </button>
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-2 p-3 relative flex-[0_0_auto] bg-[#f6f6f6] rounded-md overflow-hidden">
                <div className="relative w-4 h-4">
                  <img
                    className="absolute w-[13px] h-[13px] top-px left-px"
                    alt="Search"
                    src="https://c.animaapp.com/mclmkdkf288FZk/img/group.png"
                  />
                </div>
                <input
                  className="flex w-full rounded-md border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-0 bg-transparent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 font-paragraph-12-XS-regular-12-16 font-[number:var(--paragraph-12-XS-regular-12-16-font-weight)] text-[#757575] text-[length:var(--paragraph-12-XS-regular-12-16-font-size)] tracking-[var(--paragraph-12-XS-regular-12-16-letter-spacing)] leading-[var(--paragraph-12-XS-regular-12-16-line-height)] [font-style:var(--paragraph-12-XS-regular-12-16-font-style)]"
                  placeholder="Search within sheet"
                  value="launch"
                />
              </div>
              <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground inline-flex items-center gap-3 p-2 relative flex-[0_0_auto] bg-white rounded-lg h-auto">
                <div className="relative">
                  <img
                    className="relative w-8 h-6"
                    alt="Alert"
                    src="https://c.animaapp.com/mclmkdkf288FZk/img/alert.svg"
                  />
                  <div className="text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-primary-foreground shadow hover:bg-primary/80 flex flex-col w-5 h-5 items-center justify-center absolute top-0 left-5 bg-[#4b6a4f] rounded-[100px] border-2 border-solid border-white p-0">
                    <span className="font-paragraph-10-XXS-medium-10-16 font-[number:var(--paragraph-10-XXS-medium-10-16-font-weight)] text-[#f6f6f6] text-[length:var(--paragraph-10-XXS-medium-10-16-font-size)] tracking-[var(--paragraph-10-XXS-medium-10-16-letter-spacing)] leading-[var(--paragraph-10-XXS-medium-10-16-line-height)] [font-style:var(--paragraph-10-XXS-medium-10-16-font-style)]">
                      2
                    </span>
                  </div>
                </div>
              </button>
              <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground px-4 inline-flex items-center gap-2 pl-2 pr-3 py-1.5 relative flex-[0_0_auto] bg-white rounded-lg h-auto">
                <span className="relative flex shrink-0 overflow-hidden w-8 h-8">
                  <img
                    className="aspect-square h-full w-full object-cover"
                    alt="John Doe"
                    src="https://c.animaapp.com/mclmkdkf288FZk/img/ellipse-1.png"
                  />
                </span>
                <div className="inline-flex flex-col max-w-[120px] items-start relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-paragraph-12-XS-regular-12-16 font-[number:var(--paragraph-12-XS-regular-12-16-font-weight)] text-[#121212] text-[length:var(--paragraph-12-XS-regular-12-16-font-size)] tracking-[var(--paragraph-12-XS-regular-12-16-letter-spacing)] leading-[var(--paragraph-12-XS-regular-12-16-line-height)] whitespace-nowrap [font-style:var(--paragraph-12-XS-regular-12-16-font-style)]">
                    John Doe
                  </div>
                  <div className="relative self-stretch -mt-0.5 font-label-10-XXS-regular font-[number:var(--label-10-XXS-regular-font-weight)] text-[#757575] text-[length:var(--label-10-XXS-regular-font-size)] tracking-[var(--label-10-XXS-regular-letter-spacing)] leading-[var(--label-10-XXS-regular-line-height)] [font-style:var(--label-10-XXS-regular-font-style)] truncate">
                    john.doe@companyname.com
                  </div>
                </div>
              </button>
            </div>
          </header>

          {/* Toolbar */}
          <div className="flex items-center gap-2 px-2 py-1.5 relative self-stretch w-full flex-[0_0_auto] z-[2] bg-white border-b border-solid border-[#eeeeee]">
            <button className="whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 inline-flex items-center justify-center gap-1 p-2 relative flex-[0_0_auto] z-[3] bg-white rounded">
              <span className="relative w-fit mt-[-1.00px] font-paragraph-14-s-regular-14-20 font-[number:var(--paragraph-14-s-regular-14-20-font-weight)] text-[#121212] text-[length:var(--paragraph-14-s-regular-14-20-font-size)] tracking-[var(--paragraph-14-s-regular-14-20-letter-spacing)] leading-[var(--paragraph-14-s-regular-14-20-line-height)] whitespace-nowrap [font-style:var(--paragraph-14-s-regular-14-20-font-style)]">
                Tool bar
              </span>
              <img
                className="relative w-4 h-4 transition-transform -rotate-180"
                alt="Chevron double"
                src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron-double.svg"
              />
            </button>
            <div className="relative w-px h-6 z-[2] bg-[#eeeeee]" />
            <div className="flex items-center gap-1 relative flex-1 grow z-[1]">
              <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 inline-flex items-center gap-1 pl-2 pr-3 py-2 relative flex-[0_0_auto] bg-white rounded-md">
                <img
                  className="relative w-5 h-5"
                  alt="Eye"
                  src="https://c.animaapp.com/mclmkdkf288FZk/img/eye.svg"
                />
                <span className="relative w-fit mt-[-1.00px] font-paragraph-14-s-regular-14-20 font-[number:var(--paragraph-14-s-regular-14-20-font-weight)] text-[#121212] text-[length:var(--paragraph-14-s-regular-14-20-font-size)] tracking-[var(--paragraph-14-s-regular-14-20-letter-spacing)] leading-[var(--paragraph-14-s-regular-14-20-line-height)] whitespace-nowrap [font-style:var(--paragraph-14-s-regular-14-20-font-style)]">
                  Hide fields
                </span>
              </button>
              <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 inline-flex items-center gap-1 pl-2 pr-3 py-2 relative flex-[0_0_auto] bg-white rounded-md">
                <img
                  className="relative w-5 h-5"
                  alt="Arrow sort"
                  src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-sort.svg"
                />
                <span className="relative w-fit mt-[-1.00px] font-paragraph-14-s-regular-14-20 font-[number:var(--paragraph-14-s-regular-14-20-font-weight)] text-[#121212] text-[length:var(--paragraph-14-s-regular-14-20-font-size)] tracking-[var(--paragraph-14-s-regular-14-20-letter-spacing)] leading-[var(--paragraph-14-s-regular-14-20-line-height)] whitespace-nowrap [font-style:var(--paragraph-14-s-regular-14-20-font-style)]">
                  Sort
                </span>
              </button>
              <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 inline-flex items-center gap-1 pl-2 pr-3 py-2 relative flex-[0_0_auto] bg-white rounded-md">
                <img
                  className="relative w-5 h-5"
                  alt="Filter"
                  src="https://c.animaapp.com/mclmkdkf288FZk/img/filter.svg"
                />
                <span className="relative w-fit mt-[-1.00px] font-paragraph-14-s-regular-14-20 font-[number:var(--paragraph-14-s-regular-14-20-font-weight)] text-[#121212] text-[length:var(--paragraph-14-s-regular-14-20-font-size)] tracking-[var(--paragraph-14-s-regular-14-20-letter-spacing)] leading-[var(--paragraph-14-s-regular-14-20-line-height)] whitespace-nowrap [font-style:var(--paragraph-14-s-regular-14-20-font-style)]">
                  Filter
                </span>
              </button>
              <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 inline-flex items-center gap-1 pl-2 pr-3 py-2 relative flex-[0_0_auto] bg-white rounded-md">
                <img
                  className="relative w-5 h-5"
                  alt="Arrow autofit"
                  src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-autofit.svg"
                />
                <span className="relative w-fit mt-[-1.00px] font-paragraph-14-s-regular-14-20 font-[number:var(--paragraph-14-s-regular-14-20-font-weight)] text-[#121212] text-[length:var(--paragraph-14-s-regular-14-20-font-size)] tracking-[var(--paragraph-14-s-regular-14-20-letter-spacing)] leading-[var(--paragraph-14-s-regular-14-20-line-height)] whitespace-nowrap [font-style:var(--paragraph-14-s-regular-14-20-font-style)]">
                  Cell view
                </span>
              </button>
            </div>
            <div className="inline-flex items-center justify-end gap-2 relative flex-[0_0_auto] z-0">
              <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 inline-flex items-center gap-1 pl-2 pr-3 py-2 relative flex-[0_0_auto] bg-white rounded-md border border-solid border-[#eeeeee]">
                  <img
                    className="relative w-5 h-5"
                    alt="Arrow download"
                    src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-download.svg"
                  />
                  <span className="relative w-fit mt-[-1.00px] font-paragraph-14-s-regular-14-20 font-[number:var(--paragraph-14-s-regular-14-20-font-weight)] text-[#545454] text-[length:var(--paragraph-14-s-regular-14-20-font-size)] tracking-[var(--paragraph-14-s-regular-14-20-letter-spacing)] leading-[var(--paragraph-14-s-regular-14-20-line-height)] whitespace-nowrap [font-style:var(--paragraph-14-s-regular-14-20-font-style)]">
                    Import
                  </span>
                </button>
                <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 inline-flex items-center gap-1 pl-2 pr-3 py-2 relative flex-[0_0_auto] bg-white rounded-md border border-solid border-[#eeeeee]">
                  <img
                    className="relative w-5 h-5"
                    alt="Arrow upload"
                    src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-upload.svg"
                  />
                  <span className="relative w-fit mt-[-1.00px] font-paragraph-14-s-regular-14-20 font-[number:var(--paragraph-14-s-regular-14-20-font-weight)] text-[#545454] text-[length:var(--paragraph-14-s-regular-14-20-font-size)] tracking-[var(--paragraph-14-s-regular-14-20-letter-spacing)] leading-[var(--paragraph-14-s-regular-14-20-line-height)] whitespace-nowrap [font-style:var(--paragraph-14-s-regular-14-20-font-style)]">
                    Export
                  </span>
                </button>
                <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 inline-flex items-center gap-1 pl-2 pr-3 py-2 relative flex-[0_0_auto] bg-white rounded-md border border-solid border-[#eeeeee]">
                  <img
                    className="relative w-5 h-5"
                    alt="Share"
                    src="https://c.animaapp.com/mclmkdkf288FZk/img/share.svg"
                  />
                  <span className="relative w-fit mt-[-1.00px] font-paragraph-14-s-regular-14-20 font-[number:var(--paragraph-14-s-regular-14-20-font-weight)] text-[#545454] text-[length:var(--paragraph-14-s-regular-14-20-font-size)] tracking-[var(--paragraph-14-s-regular-14-20-letter-spacing)] leading-[var(--paragraph-14-s-regular-14-20-line-height)] whitespace-nowrap [font-style:var(--paragraph-14-s-regular-14-20-font-style)]">
                    Share
                  </span>
                </button>
              </div>
              <button className="whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground hover:bg-primary/90 h-10 inline-flex items-center justify-center gap-1 px-6 py-2 relative flex-[0_0_auto] bg-[#4b6a4f] rounded-md overflow-hidden">
                <img
                  className="relative w-5 h-5"
                  alt="Arrow split"
                  src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-split.svg"
                />
                <span className="relative w-fit mt-[-1.00px] font-paragraph-14-s-medium-14-20 font-[number:var(--paragraph-14-s-medium-14-20-font-weight)] text-white text-[length:var(--paragraph-14-s-medium-14-20-font-size)] tracking-[var(--paragraph-14-s-medium-14-20-letter-spacing)] leading-[var(--paragraph-14-s-medium-14-20-line-height)] whitespace-nowrap [font-style:var(--paragraph-14-s-medium-14-20-font-style)]">
                  New Action
                </span>
              </button>
            </div>
          </div>

          {/* Spreadsheet Content */}
          <div
            className="flex flex-col bg-background"
            style={{ height: 'calc(-120px + 100vh)' }}
          >
            <div className="relative w-full">
              <div
                className="absolute left-12 top-0 flex items-center h-10 gap-2 px-3 bg-[#e2e2e2] border-b border-[#e0e0e0] rounded-tl z-20"
                style={{ minWidth: '704px' }}
              >
                <div className="flex items-center gap-1 bg-[#eeeeee] rounded px-2 py-1">
                  <img
                    className="w-4 h-4"
                    alt="Link"
                    src="https://c.animaapp.com/mclmkdkf288FZk/img/link.svg"
                  />
                  <span className="text-xs text-[#545454]">
                    Q3 Financial Overview
                  </span>
                </div>
                <img
                  className="w-4 h-4 text-[#545454]"
                  alt="Arrow sync"
                  src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-sync.svg"
                />
              </div>
              <div className="flex w-full h-10 border-b border-[#e0e0e0] bg-white z-10">
                <div className="w-12 h-10" />
                <div className="h-10" style={{ width: '880px' }} />
                <div
                  className="flex items-center h-10 px-3"
                  style={{ width: '176px', background: 'rgb(224, 237, 226)' }}
                >
                  <img
                    className="w-4 h-4 mr-1"
                    alt="Arrow split"
                    src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-split.svg"
                  />
                  <span className="text-[#505450] text-xs font-semibold truncate">
                    ABC
                  </span>
                  <button className="ml-auto p-0 bg-transparent border-none text-[#505450] hover:bg-[#d2e0d4] rounded w-5 h-5 flex items-center justify-center">
                    <img
                      className="w-4 h-4"
                      alt="More"
                      src="https://c.animaapp.com/mclmkdkf288FZk/img/more.svg"
                    />
                  </button>
                </div>
                <div
                  className="flex items-center h-10 px-3"
                  style={{ width: '352px', background: 'rgb(207, 193, 250)' }}
                >
                  <img
                    className="w-4 h-4 mr-1"
                    alt="Arrow split"
                    src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-split.svg"
                  />
                  <span className="text-[#463e59] text-xs font-semibold truncate">
                    Answer a question
                  </span>
                  <button className="ml-auto p-0 bg-transparent border-none text-[#463e59] hover:bg-[#cfc1fa] rounded w-5 h-5 flex items-center justify-center">
                    <img
                      className="w-4 h-4"
                      alt="More"
                      src="https://c.animaapp.com/mclmkdkf288FZk/img/more.svg"
                    />
                  </button>
                </div>
                <div
                  className="flex items-center h-10 px-3"
                  style={{ width: '176px', background: 'rgb(255, 214, 201)' }}
                >
                  <img
                    className="w-4 h-4 mr-1"
                    alt="Arrow split"
                    src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-split.svg"
                  />
                  <span className="text-[#695149] text-xs font-semibold truncate">
                    Extract
                  </span>
                  <button className="ml-auto p-0 bg-transparent border-none text-[#695149] hover:bg-[#ffd6c9] rounded w-5 h-5 flex items-center justify-center">
                    <img
                      className="w-4 h-4"
                      alt="More"
                      src="https://c.animaapp.com/mclmkdkf288FZk/img/more.svg"
                    />
                  </button>
                </div>
                <div
                  className="h-10 flex items-center justify-center"
                  style={{ width: '126px' }}
                />
              </div>
            </div>
            <div
              className="flex-1 overflow-auto w-full relative"
              style={{
              
                maxWidth: '100vw',
              }}
            >
              <div className="inline-block min-w-max">
                {/* Column Headers */}
                <div className="flex sticky top-0 bg-muted z-10">
                  {Headers.map((header, index) => (
                    <div
                      key={index}
                      className="relative flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-[#eeeeee] text-[#757575]"
                      style={{ width: index === 0 ? '48px' : '176px', height: '32px' }}
                    >
                      <div className="flex items-center gap-1 w-full justify-center">
                        {index === 0 ? (
                          ''
                        ) : index === 1 ? (
                          <>
                            <img
                              className="w-4 h-4"
                              alt="Briefcase"
                              src="https://c.animaapp.com/mclmkdkf288FZk/img/briefcase.svg"
                            />
                            {header}
                          </>
                        ) : index === 2 ? (
                          <>
                            <img
                              className="w-4 h-4"
                              alt="Calendar"
                              src="https://c.animaapp.com/mclmkdkf288FZk/img/calendar.svg"
                            />
                            {header}
                          </>
                        ) : index === 3 ? (
                          <>
                            <img
                              className="w-4 h-4"
                              alt="Chevron circle"
                              src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron-circle.svg"
                            />
                            {header}
                          </>
                        ) : index === 4 ? (
                          <>
                            <img
                              className="w-4 h-4"
                              alt="Person"
                              src="https://c.animaapp.com/mclmkdkf288FZk/img/person.svg"
                            />
                            {header}
                          </>
                        ) : index === 5 ? (
                          <>
                            <img
                              className="w-4 h-4"
                              alt="Globe"
                              src="https://c.animaapp.com/mclmkdkf288FZk/img/globe.svg"
                            />
                            {header}
                          </>
                        ) : index === 6 ? (
                          <>
                            <img
                              className="w-4 h-4"
                              alt="Emoji"
                              src="https://c.animaapp.com/mclmkdkf288FZk/img/emoji.svg"
                            />
                            {header}
                          </>
                        ) : (
                          header
                        )}
                      </div>
                      {index !== Headers.length - 1 && (
                        <div className="absolute top-0 right-0 w-1 h-full cursor-col-resize bg-transparent hover:bg-blue-500" />
                      )}
                    </div>
                  ))}
                </div>
                {/* Data Rows */}
                {tasks.map((task, rowIndex) => (
                  <div key={task.id} className="flex relative min-w-max">
                    <div
                      className="relative w-12 h-8 flex items-center justify-center border border-gray-300 text-xs font-medium cursor-pointer select-none bg-gray-200 sticky left-0 z-10"
                    >
                      {task.id}
                      <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500" />
                    </div>
                    <input
                      className="px-1 text-xs outline-none border border-gray-300 bg-white"
                      value={task.taskName}
                      style={{ width: '176px', height: '32px', fontFamily: 'Arial' }}
                      readOnly
                    />
                    <input
                      className={`px-1 text-xs outline-none border ${
                        task.id === 3
                          ? 'border-2 border-blue-500 bg-blue-50'
                          : 'border-gray-300 bg-white'
                      }`}
                      value={task.startDate}
                      style={{ width: '176px', height: '32px', fontFamily: 'Arial' }}
                      readOnly
                    />
                    <div
                      className="flex items-center justify-center h-8 w-full border border-gray-300 bg-white"
                      style={{ width: '176px', height: '32px' }}
                    >
                      <button
                        className={`px-2 py-1 rounded-full text-xs font-medium cursor-pointer ${getStatusStyles(
                          task.status
                        )}`}
                        style={{ outline: 'none', border: 'none' }}
                      >
                        {task.status}
                      </button>
                    </div>
                    <input
                      className="px-1 text-xs outline-none border border-gray-300 bg-white"
                      value={task.assignedTo}
                      style={{ width: '176px', height: '32px', fontFamily: 'Arial' }}
                      readOnly
                    />
                    <input
                      className="px-1 text-xs outline-none border border-gray-300 bg-white"
                      value={task.portfolio}
                      style={{ width: '176px', height: '32px', fontFamily: 'Arial' }}
                      readOnly
                    />
                    <input
                      className="px-1 text-xs outline-none border border-gray-300 bg-white"
                      value={task.lead}
                      style={{ width: '176px', height: '32px', fontFamily: 'Arial' }}
                      readOnly
                    />
                    <input
                      className={`px-1 text-xs outline-none border border-gray-300 bg-white ${getPriorityStyles(
                        task.priority
                      )}`}
                      value={task.priority}
                      style={{ width: '176px', height: '32px', fontFamily: 'Arial' }}
                      readOnly
                    />
                    <input
                      className="px-1 text-xs outline-none border border-gray-300 bg-white"
                      value={task.endDate}
                      style={{ width: '176px', height: '32px', fontFamily: 'Arial' }}
                      readOnly
                    />
                    <input
                      className="px-1 text-xs outline-none border border-gray-300 bg-white"
                      value={task.budget}
                      style={{ width: '176px', height: '32px', fontFamily: 'Arial' }}
                      readOnly
                    />
                    <input
                      className="px-1 text-xs outline-none border border-gray-300 bg-white"
                      value={task.notes}
                      style={{ width: '176px', height: '32px', fontFamily: 'Arial' }}
                      readOnly
                    />
                  </div>
                ))}
                {/* Empty Rows */}
                {[...Array(9)].map((_, rowIndex) => (
                  <div key={rowIndex + 6} className="flex relative min-w-max">
                    <div
                      className="relative w-12 h-8 flex items-center justify-center border border-gray-300 text-xs font-medium cursor-pointer select-none bg-gray-200 sticky left-0 z-10"
                    >
                      {rowIndex + 6}
                      <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500" />
                    </div>
                    {Headers.slice(1).map((_, colIndex) => (
                      <div
                        key={colIndex}
                        className="flex items-center justify-center h-8 w-full border border-gray-300 bg-white"
                        style={{ width: '176px', height: '32px' }}
                      >
                        {colIndex === 2 ? (
                          <button
                            className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                            style={{ outline: 'none', border: 'none' }}
                          ></button>
                        ) : (
                          <input
                            className="px-1 text-xs outline-none border border-gray-300 bg-white"
                            value=""
                            style={{
                              width: '176px',
                              height: '32px',
                              fontFamily: 'Arial',
                            }}
                            readOnly
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Spreadsheet;